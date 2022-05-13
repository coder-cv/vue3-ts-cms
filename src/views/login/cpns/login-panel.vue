<template>
  <div class="w-80 mb-80">
    <h1 class="font-black text-center mb-4">后台管理系统</h1>
    <el-tabs type="border-card" stretch :v-model="currentTab">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机号登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="flex justify-between mb-2">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="w-full" @click="loginClick"
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
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const currentTab = ref('account')

    const loginClick = () => {
      if (currentTab.value == 'account') {
        loginAccountRef.value?.loginAction(isKeepPassword.value)
      }
    }
    return {
      isKeepPassword,
      loginAccountRef,
      loginClick,
      currentTab
    }
  }
})
</script>

<style scoped></style>
