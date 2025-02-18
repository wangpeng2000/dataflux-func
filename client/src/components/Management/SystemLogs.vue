<i18n locale="zh-CN" lang="yaml">
Input filter content: 输入过滤内容
</i18n>

<template>
  <transition name="fade">
    <el-container direction="vertical" v-if="$store.state.isLoaded">
      <!-- 标题区 -->
      <el-header height="60px">
        <h1>
          {{ $t('System Logs') }}
          <div class="header-control">
            <div class="log-filter-input">
              <el-input
                :placeholder="$t('Input filter content')"
                size="small"
                v-model="logFilter">
                <i slot="prefix"
                  class="el-input__icon el-icon-close text-main"
                  v-if="logFilter"
                  @click="logFilter = ''"></i>
              </el-input>
            </div>
          </div>
        </h1>
      </el-header>

      <!-- 列表区 -->
      <el-main class="common-table-container">
        <el-table v-if="!T.isNothing(filteredData)"
          class="common-table" height="100%"
          size="mini"
          :show-header="false"
          :data="filteredData">

          <el-table-column>
            <template slot-scope="scope">
              <pre class="log-line" :class="logClass(scope.row)">{{ scope.row }}</pre>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </transition>
</template>

<script>
export default {
  name: 'SystemLogs',
  components: {
  },
  watch: {
    $route: {
      immediate: true,
      async handler(to, from) {
        await this.loadData();
      }
    },
  },
  methods: {
    async loadData(options) {
      options = options || {};

      let headers = {}
      headers[this.$store.getters.CONFIG('_WEB_TRACE_ID_HEADER')] = this.$store.getters.CONFIG('_WEB_PULL_LOG_TRACE_ID');

      let apiRes = await this.T.callAPI_get('/api/v1/system-logs', {
        headers: headers,
        query  : { position: this.nextPosition },
      });
      if (!apiRes.ok) return;

      if (options.append) {
        this.data = this.data.concat(apiRes.data.logs);
      } else {
        this.data = apiRes.data.logs;
      }
      this.data = this.data.slice(-5000);

      this.nextPosition = apiRes.data.nextPosition;

      this.$store.commit('updateLoadStatus', true);
    },
    logClass(row) {
      if (this.T.startsWith(row, '[D]')) {
        return 'log-debug';
      } else if (this.T.startsWith(row, '[I]')) {
        return 'log-info';
      } else if (this.T.startsWith(row, '[W]')) {
        return 'log-warning';
      } else if (this.T.startsWith(row, '[E]')) {
        return 'log-error';
      } else {
        return '';
      }
    },
  },
  computed: {
    filteredData() {
      if (!this.logFilter) {
        return this.data;
      } else {
        return this.data.filter(line => {
          return line.toLowerCase().indexOf(this.logFilter.toLowerCase()) >= 0;
        });
      }
    }
  },
  props: {
  },
  data() {
    return {
      data: [],
      logFilter: '',

      nextPosition: null,

      autoRefreshTimer: null,
    }
  },
  mounted() {
    this.autoRefreshTimer = setInterval(() => {
      this.loadData({ append: true });
    }, 5 * 1000);
  },
  beforeDestroy() {
    if (this.autoRefreshTimer) clearInterval(this.autoRefreshTimer);
  },
}
</script>

<style scoped>
.log-line {
  margin: 0;
  font-size: 14px;
}
.log-debug {
  color: darkgrey;
}
.log-info {
  color: green;
}
.log-warning {
  color: orange;
}
.log-error {
  color: red;
}
.log-filter-input {
  width: 300px;
}
.log-filter-input .el-icon-close {
  cursor: pointer;
  font-weight: bold;
}
.el-table td {
  padding: 0;
}
</style>

<style>
</style>
