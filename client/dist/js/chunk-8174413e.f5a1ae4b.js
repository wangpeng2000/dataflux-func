(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8174413e"],{"0797":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Download as text file":"作为文本文件下载"}}'),delete t.options._Ctor}},"0bfb":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Overview":"总览","Biz Entity":"业务实体","Worker Queue Info":"队列信息","Queue":"队列","overviewCountUnit":"个","workerCount":"工作单元 {n} 个","taskCount":"请求排队 {n} 个","Script overview":"脚本总览","scriptOverviewCount":"{n} 个","Code size":"代码大小","Publish ver.":"发布版本","Publish time":"发布时间","Never published":"从未发布","System builtin":"系统内置","Recent operations":"最近操作记录","recentOperationCount":"最近{n}条","Time":"时间","Client":"客户端","Client ID":"客户端ID","IP Address":"IP地址","User":"用户","User ID":"用户ID","Operation":"操作","Data ID":"数据ID","MODIFY":"修改操作","DELETE":"删除操作","Cost":"耗时","ms":"毫秒","Show detail":"显示HTTP请求详情","The full content is as follows":"完整内容如下","Request":"请求","Response":"响应","Pressure":"压力"}}'),delete t.options._Ctor}},1578:function(t,e,n){"use strict";var o=n("da56"),s=n.n(o);e["default"]=s.a},"21a6":function(t,e,n){(function(n){var o,s,r;(function(n,a){s=[],o=a,r="function"===typeof o?o.apply(e,s):o,void 0===r||(t.exports=r)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){i(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function s(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,n){var i=a.URL||a.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?r(l):s(l.href)?o(t,e,n):r(l,l.target="_blank")):(l.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,a){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,a),n);else if(s(t))o(t,n,a);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout((function(){r(i)}))}}:function(t,e,n,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var r="application/octet-stream"===t.type,i=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&i)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=t:location=t,s=null},c.readAsDataURL(t)}else{var u=a.URL||a.webkitURL,d=u.createObjectURL(t);s?s.location=d:location.href=d,s=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});a.saveAs=i.saveAs=i,t.exports=i}))}).call(this,n("c8ba"))},"4d09":function(t,e,n){"use strict";var o=n("0bfb"),s=n.n(o);e["default"]=s.a},"7b0b4":function(t,e,n){"use strict";var o=n("0797"),s=n.n(o);e["default"]=s.a},8157:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.$store.state.isLoaded?n("el-container",{attrs:{direction:"vertical"}},[n("el-header",{attrs:{height:"60px"}},[n("h1",[t._v(t._s(t.$t("Overview")))])]),t._v(" "),n("el-main",[n("el-divider",{attrs:{"content-position":"left"}},[n("h1",[t._v(t._s(t.$t("Biz Entity")))])]),t._v(" "),t._l(t.bizEntityCount,(function(e){return n("el-card",{key:e.name,staticClass:"overview-card",attrs:{shadow:"hover"}},[t.C.OVERVIEW_ENTITY_MAP.get(e.name).icon?n("i",{staticClass:"fa fa-fw overview-icon",class:t.C.OVERVIEW_ENTITY_MAP.get(e.name).icon}):t.C.OVERVIEW_ENTITY_MAP.get(e.name).tagText?n("i",{staticClass:"overview-icon overview-icon-text",attrs:{type:"info"}},[n("code",[t._v(t._s(t.C.OVERVIEW_ENTITY_MAP.get(e.name).tagText))])]):t._e(),t._v(" "),n("span",{staticClass:"overview-name"},[t._v(t._s(t.C.OVERVIEW_ENTITY_MAP.get(e.name).name))]),t._v(" "),n("span",{staticClass:"overview-count",style:{"font-size":t.overviewCountFontSize(e.count)+"px"}},[t._v("\n          "+t._s(e.count)+"\n          "),n("span",{staticClass:"overview-count-unit"},[t._v(t._s(t.$t("overviewCountUnit")))])])])})),t._v(" "),n("el-divider",{attrs:{"content-position":"left"}},[n("h1",[t._v(t._s(t.$t("Worker Queue Info")))])]),t._v(" "),t._l(t.workerQueueInfo,(function(e,o){return n("el-card",{key:o,staticClass:"worker-queue-card",class:{"worker-queue-highlight":e.taskCount>0},attrs:{shadow:"hover"}},[n("el-progress",{attrs:{type:"dashboard",width:"100",percentage:t.workerQueuePressurePercentage(e.pressure,e.maxPressure),format:t.workerQueuePressureFormat,color:t.WORKER_QUEUE_PRESSURE_COLORS}}),t._v(" "),n("span",{staticClass:"worker-queue-info"},[n("span",{staticClass:"worker-queue-number"},[t._v("#"+t._s(o))]),t._v(" "+t._s(t.$t("Queue"))+"\n          "),n("br"),t._v(t._s(t.$tc("workerCount",e.workerCount||0))+"\n          "),n("br"),t._v(t._s(t.$tc("taskCount",t.T.numberLimit(e.taskCount)))+"\n        ")])],1)})),t._v(" "),n("el-divider",{staticClass:"overview-divider",attrs:{"content-position":"left"}},[n("h1",[t._v(t._s(t.$t("Script overview"))+" "+t._s(t.$tc("scriptOverviewCount",t.scriptOverview.length)))])]),t._v(" "),n("el-table",{attrs:{data:t.scriptOverview,stripe:""}},[n("el-table-column",{attrs:{label:t.$t("Script Set"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.scriptSetTitle||e.row.scriptSetId))])]}}],null,!1,924199659)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Script"),sortable:"","sort-by":["title","id"]},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.title||e.row.id))])]}}],null,!1,3036302123)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Func"),sortable:"","sort-by":"funcCount",align:"right",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.funcCount?n("code",[t._v(t._s(e.row.funcCount))]):n("code",[t._v("-")])]}}],null,!1,307296925)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Code size"),sortable:"","sort-by":"codeSize",align:"right",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.codeSize?n("code",[t._v(t._s(e.row.codeSizeHuman))]):t._e()]}}],null,!1,2168609287)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Publish ver."),sortable:"","sort-by":"publishVersion",align:"right",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.publishVersion?n("code",[t._v("v"+t._s(""+e.row.publishVersion))]):n("code",[t._v("-")])]}}],null,!1,4192420482)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Publish time"),sortable:"","sort-by":"latestPublishTimestamp",align:"right",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.latestPublishTime?[n("span",[t._v(t._s(t._f("datetime")(e.row.latestPublishTime)))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"text-info"},[t._v(t._s(t._f("fromNow")(e.row.latestPublishTime)))])]:[0===e.row.publishVersion?n("span",{staticClass:"text-info"},[t._v(t._s(t.$t("Never published")))]):n("span",{staticClass:"text-info"},[t._v(t._s(t.$t("System builtin")))])]]}}],null,!1,639056162)})],1),t._v(" "),n("el-divider",{staticClass:"overview-divider",attrs:{"content-position":"left"}},[n("h1",[t._v(t._s(t.$t("Recent operations"))+" "+t._s(t.$tc("recentOperationCount",t.latestOperations.length)))])]),t._v(" "),n("el-table",{attrs:{data:t.latestOperations,stripe:""}},[n("el-table-column",{attrs:{label:t.$t("Time"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("datetime")(e.row.createTime)))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"text-info"},[t._v(t._s(t._f("fromNow")(e.row.createTime)))])]}}],null,!1,273918412)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("User")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("strong",[t._v(t._s(e.row.username))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"text-info"},[t._v(t._s(t.$t("User ID"))+t._s(t.$t(":")))]),t._v(" "),n("code",{staticClass:"text-code text-small"},[t._v(t._s(e.row.userId))]),n("CopyButton",{attrs:{content:e.row.userId}}),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"text-info"},[t._v(t._s(t.$t("Client ID"))+t._s(t.$t(":")))]),t._v(" "),n("code",{staticClass:"text-code text-small"},[t._v(t._s(e.row.clientId))]),n("CopyButton",{attrs:{content:e.row.clientId}}),t._v(" "),t.T.isNothing(e.row.clientIPsJSON)?t._e():[n("br"),t._v(" "),n("span",{staticClass:"text-info"},[t._v(t._s(t.$t("IP Address"))+t._s(t.$t(":")))]),t._v(" "),n("code",{staticClass:"text-code text-small"},[t._v(t._s(e.row.clientIPsJSON.join(", ")))]),n("CopyButton",{attrs:{content:e.row.clientIPsJSON.join(", ")}})]]}}],null,!1,401815956)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Operation")},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.respStatusCode>=200&&e.row.respStatusCode<400?n("span",{staticClass:"text-good"},[n("i",{staticClass:"fa fa-fw fa-check-circle"})]):n("span",{staticClass:"text-bad"},[n("i",{staticClass:"fa fa-fw fa-times-circle"})]),t._v(" "),n("span",[t._v(t._s(e.row._operationDescribe))]),t._v(" "),e.row._operationEntityId?[n("br"),t._v(" "),n("span",{staticClass:"text-info"},[t._v(t._s(t.$t("Data ID"))+t._s(t.$t(":")))]),t._v(" "),n("code",{staticClass:"text-code text-small"},[t._v(t._s(e.row._operationEntityId))]),n("CopyButton",{attrs:{content:e.row._operationEntityId}})]:t._e(),t._v(" "),n("br"),t._v(" "),t.T.endsWith(e.row.reqRoute,"/do/modify")?n("strong",{staticClass:"text-watch"},[n("i",{staticClass:"fa fa-fw fa-exclamation-triangle"}),t._v("\n              "+t._s(t.$t("MODIFY"))+"\n            ")]):t._e(),t._v(" "),t.T.endsWith(e.row.reqRoute,"/do/delete")?n("strong",{staticClass:"text-bad"},[n("i",{staticClass:"fa fa-fw fa-exclamation-circle"}),t._v("\n              "+t._s(t.$t("DELETE"))+"\n            ")]):t._e()]}}],null,!1,2929741772)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Cost"),align:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.reqCost)+" "),n("span",{staticClass:"text-info"},[t._v(t._s(t.$t("ms")))])]}}],null,!1,409322375)}),t._v(" "),n("el-table-column",{attrs:{align:"right",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.showDetail(e.row)}}},[t._v(t._s(t.$t("Show detail")))])]}}],null,!1,3868636333)})],1)],2),t._v(" "),n("LongTextDialog",{ref:"longTextDialog",attrs:{title:t.$t("The full content is as follows"),showDownload:!0}})],1):t._e()],1)},s=[],r=n("1da1"),a=(n("a15b"),n("159b"),n("99af"),n("b0c0"),n("96cf"),n("b76c")),i={name:"Overview",components:{LongTextDialog:a["a"]},watch:{$route:{immediate:!0,handler:function(t,e){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.loadData();case 2:case"end":return t.stop()}}),t)})))()}}},methods:{loadData:function(t,e){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){var s,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e=e||{},s=null,n.T.isNothing(t)||(s={sections:t.join(",")}),o.next=5,n.T.callAPI_get("/api/v1/func/overview",{query:s,alert:{muteError:e.mute}});case 5:if(r=o.sent,r.ok){o.next=8;break}return o.abrupt("return");case 8:r.data.scriptOverview&&r.data.scriptOverview.forEach((function(t){t.latestPublishTimestamp=0,t.latestPublishTime&&(t.latestPublishTimestamp=new Date(t.latestPublishTime).getTime())})),(t||n.OVERVIEW_SECTIONS).forEach((function(t){n[t]=r.data[t]})),n.scriptOverview.forEach((function(t){t.codeSize&&(t.codeSizeHuman=n.T.byteSizeHuman(t.codeSize))})),n.$store.commit("updateLoadStatus",!0);case 12:case"end":return o.stop()}}),o)})))()},showDetail:function(t){this.$store.commit("updateHighlightedTableDataId",t.id);var e=[];e.push("===== ".concat(this.$t("Request")," =====")),e.push("".concat(t.reqMethod.toUpperCase()," ").concat(this.T.formatURL(t.reqRoute,{params:t.reqParamsJSON,query:t.reqQueryJSON}))),t.reqBodyJSON&&e.push(JSON.stringify(t.reqBodyJSON,null,2)),e.push("\n===== ".concat(this.$t("Response")," =====")),e.push("Status Code: ".concat(t.respStatusCode)),t.respBodyJSON&&e.push(JSON.stringify(t.respBodyJSON,null,2));var n=e.join("\n"),o=this.M(t.createTime).utcOffset(8).format("YYYYMMDD_HHmmss"),s="http-dump.".concat(o);this.$refs.longTextDialog.update(n,s)},overviewCountFontSize:function(t){var e=(""+t).length;return Math.min(80-15*(e-4),80)},workerQueuePressurePercentage:function(t,e){var n=100*t/(2*e);return n<0?n=0:n>100&&(n=100),n},workerQueuePressureFormat:function(t){return"".concat(this.$t("Pressure")).concat(this.$t(":")," ").concat(parseInt(2*t))}},computed:{OVERVIEW_SECTIONS:function(){return["bizEntityCount","workerQueueInfo","scriptOverview","latestOperations"]},WORKER_QUEUE_PRESSURE_COLORS:function(){return[{color:"#00aa00",percentage:50},{color:"#ff6600",percentage:80},{color:"#ff0000",percentage:100}]}},props:{},data:function(){return{bizEntityCount:[],workerQueueInfo:[],scriptOverview:[],latestOperations:[],overviewInterval:null}},mounted:function(){var t=this;this.overviewInterval||(this.overviewInterval=setInterval((function(){"overview"!==t.$route.name&&(clearInterval(t.overviewInterval),t.overviewInterval=null),t.loadData(["workerQueueInfo"],{mute:!0})}),3e4))}},l=i,c=(n("df93"),n("2877")),u=n("1578"),d=n("4d09"),f=Object(c["a"])(l,o,s,!1,null,"6b547482",null);"function"===typeof u["default"]&&Object(u["default"])(f),"function"===typeof d["default"]&&Object(d["default"])(f);e["default"]=f.exports},"96e1":function(t,e,n){},a7e8:function(t,e,n){"use strict";n("b217")},b217:function(t,e,n){},b76c:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{id:"LongTextDialog",visible:t.show,width:"70%"},on:{"update:visible":function(e){t.show=e}}},[n("template",{slot:"title"},[t.showDownload&&t.fileName&&t.content?n("el-link",{attrs:{type:"primary"},on:{click:t.download}},[t._v("\n      "+t._s(t.$t("Download as text file"))+"\n      "),n("i",{staticClass:"fa fa-fw fa-download"})]):t._e()],1),t._v(" "),n("div",[n("p",[t._v(t._s(t.title))]),t._v(" "),n("textarea",{attrs:{id:"longTextDialogContent"}})])],2)},s=[],r=(n("130f"),n("21a6")),a=n.n(r),i={name:"LongTextDialog",components:{},watch:{},methods:{update:function(t,e){var n=this;this.codeMirror&&this.codeMirror.setValue(""),this.content=t,this.fileName=(e||"dump")+".txt",this.show=!0,setImmediate((function(){n.codeMirror||(n.codeMirror=n.T.initCodeMirror("longTextDialogContent",n.mode||"text"),n.codeMirror.setOption("theme",n.T.getCodeMirrorThemeName()),n.T.setCodeMirrorReadOnly(n.codeMirror,!0)),n.codeMirror.setValue(n.content||""),n.codeMirror.refresh()}))},download:function(){var t=new Blob([this.content],{type:"text/plain"}),e=this.fileName;a.a.saveAs(t,e)}},computed:{},props:{title:String,mode:Boolean,showDownload:Boolean},data:function(){return{show:!1,fileName:null,content:null,codeMirror:null}}},l=i,c=(n("a7e8"),n("2877")),u=n("7b0b4"),d=Object(c["a"])(l,o,s,!1,null,"30713cee",null);"function"===typeof u["default"]&&Object(u["default"])(d);e["a"]=d.exports},da56:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"overviewCountUnit":"","workerCount":"NO worker | {n} worker | {n} workers","taskCount":"NO task | {n} task | {n} tasks","scriptOverviewCount":"(NO script) | ({n} script) | ({n} scripts)","recentOperationCount":"(latest {n} operation) | (latest {n} operations)"}}'),delete t.options._Ctor}},df93:function(t,e,n){"use strict";n("96e1")}}]);