<template>
  <div class="login-account">
    <el-form label-width="75px" :rules="rules" :model="account">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密&nbsp;&nbsp;&nbsp;码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    return {
      account,
      rules
    }
  }
})
</script>

<style scoped>
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
