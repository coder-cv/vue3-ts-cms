<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机号登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="loginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { User, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: { User, Iphone, LoginAccount, LoginPhone },
  setup() {
    const isKeepPassword = ref(true)
    const loginClick = () => {
      console.log('login')
    }
    return {
      isKeepPassword,
      loginClick
    }
  }
})
</script>

<style scoped>
.login-panel {
  width: 280px;
  margin-bottom: 400px;
}

.title {
  text-align: center;
}
.login-panel > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.login-panel .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.login-panel .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.login-panel .account-control {
  display: flex;
  justify-content: space-between;
}

.login-panel .login-btn {
  width: 100%;
  margin-top: 5px;
}
</style>
