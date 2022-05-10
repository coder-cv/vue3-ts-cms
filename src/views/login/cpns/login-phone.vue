<template>
  <div class="login-phone">
    <el-form label-width="75px" :model="phone">
      <el-form-item label="手机号">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码">
        <template class="getCode">
          <el-input v-model="phone.code" class="num" />
          <el-button type="primary">获取验证码</el-button>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return {
      phone
    }
  }
})
</script>

<style scoped>
.getCode {
  display: flex;
}

.getCode .num {
  margin-right: 8px;
}
</style>
