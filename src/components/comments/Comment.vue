<template>
  <div class="comment">
    <el-card class="box-card">
      <div class="text-container">
        <span><i class="el-icon-circle-check"></i> {{ comment.user.email }}</span>
        <br>
        <span>{{ comment.content }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>
</style>
