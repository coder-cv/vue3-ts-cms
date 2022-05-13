<template>
  <div class="main full">
    <el-container class="full">
      <el-aside width="200px" class="aside">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header>header </el-header>
        <el-main class="page-main">Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavMenu from '@/components/nav-menu'

export default defineComponent({
  components: { NavMenu },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
