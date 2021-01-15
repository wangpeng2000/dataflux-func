'use strict';

/* Builtin Modules */

/* 3rd-party Modules */
var async = require('async');

/* Project Modules */
var E           = require('../utils/serverError');
var CONFIG      = require('../utils/yamlResources').get('CONFIG');
var toolkit     = require('../utils/toolkit');
var modelHelper = require('../utils/modelHelper');
var urlFor      = require('../utils/routeLoader').urlFor;

var funcMod          = require('../models/funcMod');
var batchMod         = require('../models/batchMod');
var batchTaskInfoMod = require('../models/batchTaskInfoMod');

/* Configure */

/* Handlers */
var crudHandler = exports.crudHandler = batchMod.createCRUDHandler();

exports.list = function(req, res, next) {
  var batches       = null;
  var batchPageInfo = null;

  var batchModel = batchMod.createModel(res.locals);

  async.series([
    function(asyncCallback) {
      var opt = res.locals.getQueryOptions();

      batchModel.list(opt, function(err, dbRes, pageInfo) {
        if (err) return asyncCallback(err);

        batches       = dbRes;
        batchPageInfo = pageInfo;

        return asyncCallback();
      });
    },
    // 查询任务信息数量
    function(asyncCallback) {
      if (batches.length <= 0) return asyncCallback();

      var opt = res.locals.getQueryOptions();
      if (!opt.extra.withTaskInfoCount) return asyncCallback();

      var batchTaskInfoModel = batchTaskInfoMod.createModel(res.locals);

      var ids = toolkit.arrayElementValues(batches, 'id');
      batchTaskInfoModel.countByBatchId(ids, function(err, dbRes) {
        if (err) return asyncCallback(err);

        var _map = toolkit.arrayElementMap(dbRes, 'batchId');
        batches.forEach(function(d) {
          if (!_map[d.id]) {
            d.taskInfoCount = 0;
          } else {
            d.taskInfoCount = _map[d.id].count || 0;
          }
        });

        return asyncCallback();
      });
    },
  ], function(err) {
    if (err) return next(err);

    var ret = toolkit.initRet(batches, batchPageInfo);
    res.locals.sendJSON(ret);
  });
};

exports.add = function(req, res, next) {
  var data   = req.body.data;
  var origin = req.get('X-Dff-Origin') === 'DFF-UI' ? 'UI' : 'API';

  _add(res.locals, data, origin, function(err, addedId) {
    if (err) return next(err);

    var ret = toolkit.initRet({
      id : addedId,
      url: urlFor('datafluxFuncAPI.callBatchByGet', {
        params: { id: addedId },
      }),
    });
    return res.locals.sendJSON(ret);
  });
};

exports.modify = function(req, res, next) {
  var id   = req.params.id;
  var data = req.body.data;

  var funcModel  = funcMod.createModel(res.locals);
  var batchModel = batchMod.createModel(res.locals);

  var batch = null;

  async.series([
    // 获取数据
    function(asyncCallback) {
      batchModel.getWithCheck(id, null, function(err, dbRes) {
        if (err) return asyncCallback(err);

        batch = dbRes;

        return asyncCallback();
      });
    },
    // 检查函数
    function(asyncCallback) {
      if (toolkit.isNothing(data.funcId)) return asyncCallback();

      funcModel.getWithCheck(data.funcId, null, asyncCallback);
    },
    // 数据入库
    function(asyncCallback) {
      batchModel.modify(id, data, asyncCallback);
    },
  ], function(err) {
    if (err) return next(err);

    var ret = toolkit.initRet({
      id : id,
      url: urlFor('datafluxFuncAPI.callBatchByGet', {
        params: { id: id },
      }),
    });
    return res.locals.sendJSON(ret);
  });
};

exports.delete = function(req, res, next) {
  var id = req.params.id;

  _delete(res.locals, id, function(err, deletedId) {
    if (err) return next(err);

    var ret = toolkit.initRet({
      id: deletedId,
    });
    return res.locals.sendJSON(ret);
  });
};

exports.addMany = function(req, res, next) {
  var data   = req.body.data;
  var origin = req.get('X-Dff-Origin') === 'DFF-UI' ? 'UI' : 'API';

  var addedIds = [];

  var transScope = modelHelper.createTransScope(res.locals.db);
  async.series([
    function(asyncCallback) {
      transScope.start(asyncCallback);
    },
    function(asyncCallback) {
      async.eachSeries(data, function(d, eachCallback) {
        _add(res.locals, d, origin, function(err, addedId) {
          if (err) return eachCallback(err);

          addedIds.push(addedId);

          return eachCallback();
        });
      }, asyncCallback);
    },
  ], function(err) {
    transScope.end(err, function(scopeErr) {
      if (scopeErr) return next(scopeErr);

      var ret = toolkit.initRet({
        ids: addedIds,
      });
      return res.locals.sendJSON(ret);
    });
  });
};

exports.deleteMany = function(req, res, next) {
  var deleteIds = [];

  var batchModel = batchMod.createModel(res.locals);

  var transScope = modelHelper.createTransScope(res.locals.db);
  async.series([
    function(asyncCallback) {
      var opt = res.locals.getQueryOptions();
      opt.fields = ['bat.id'];

      if (toolkit.isNothing(opt.filters)) {
        return asyncCallback(new E('EBizCondition.DeleteConditionNotSpecified', 'At least one condition should been specified.'));
      }

      batchModel.list(opt, function(err, dbRes) {
        if (err) return asyncCallback(err);

        deleteIds = dbRes.reduce(function(acc, x) {
          acc.push(x.id);
          return acc;
        }, []);

        return asyncCallback();
      });
    },
    function(asyncCallback) {
      transScope.start(asyncCallback);
    },
    function(asyncCallback) {
      async.eachSeries(deleteIds, function(id, eachCallback) {
        _delete(res.locals, id, eachCallback);
      }, asyncCallback);
    },
  ], function(err) {
    transScope.end(err, function(scopeErr) {
      if (scopeErr) return next(scopeErr);

      var ret = toolkit.initRet({
        ids: deleteIds,
      });
      return res.locals.sendJSON(ret);
    });
  });
};

function _add(locals, data, origin, callback) {
  // 自动记录操作界面
  data.origin = origin;

  var funcModel  = funcMod.createModel(locals);
  var batchModel = batchMod.createModel(locals);

  var addedId = null;

  async.series([
    // 检查函数
    function(asyncCallback) {
      funcModel.getWithCheck(data.funcId, ['func.seq'], asyncCallback);
    },
    // 数据入库
    function(asyncCallback) {
      batchModel.add(data, function(err, _addedId) {
        if (err) return asyncCallback(err);

        addedId = _addedId;

        return asyncCallback();
      });
    },
  ], function(err) {
    if (err) return callback(err);
    return callback(null, addedId);
  });
};

function _delete(locals, id, callback) {
  var batchModel = batchMod.createModel(locals);

  async.series([
    function(asyncCallback) {
      batchModel.getWithCheck(id, ['bat.seq'], asyncCallback);
    },
    function(asyncCallback) {
      batchModel.delete(id, asyncCallback);
    },
  ], function(err) {
    if (err) return callback(err);
    return callback(null, id);
  });
};
