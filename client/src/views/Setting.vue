<i18n locale="zh-CN" lang="yaml">
Cache Clear: 清除缓存
Code Editor: 代码编辑器配置
User Info  : 用户信息
Password   : 修改密码
</i18n>

<template>
  <el-container direction="horizontal">
    <!-- 二级导航 -->
    <el-aside width="200px">
      <div class="aside">
        <div class="aside-content">
          <el-menu
            mode="vertical"
            :router="true"
            :unique-opened="true"
            :default-active="$route.path">
            <el-menu-item index="/setting/code-editor-setup">
              <span>
                <i class="fa fa-fw fa-edit"></i>
                {{ $t('Code Editor') }}
              </span>
            </el-menu-item>
            <el-menu-item index="/setting/profile-setup" v-if="!$store.getters.isIntegratedUser">
              <span>
                <i class="fa fa-fw fa-user-circle"></i>
                {{ $t('User Info') }}
              </span>
            </el-menu-item>
            <el-menu-item index="/setting/password-setup" v-if="!$store.getters.isIntegratedUser">
              <span>
                <i class="fa fa-fw fa-lock"></i>
                {{ $t('Password') }}
              </span>
            </el-menu-item>
            <el-menu-item index="/setting/clear-cache">
              <span>
                <i class="fa fa-fw fa-refresh"></i>
                {{ $t('Cache Clear') }}
              </span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-aside>

    <!-- 主要 -->
    <router-view />
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Setting',
  components: {
  },
  watch: {
  },
  methods: {
  },
  computed: {
  },
  props: {
  },
  data() {
    return {}
  },
  created() {
  },
}
</script>

<style scoped>
.aside {
  margin-top: 40px;
}
.aside-content {
  height: 100%;
}
</style>

<style>
</style>
