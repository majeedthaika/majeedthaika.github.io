<template>
  <div class="new-post">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">New Post</span>
      </div>
      <el-form>
        <el-form-item label="Name">
          <el-input v-model="post.name"></el-input>
        </el-form-item>
        <el-form-item label="Content">
          <el-input v-model="post.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native="createPost">Submit</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import router from '../../router'

export default {
  name: 'new-post',
  data () {
    return {
      post: {
        name: '',
        content: ''
      }
    }
  },
  methods: {
    createPost () {
      PostsApi.createPost(this.post,
        function (_post) {
          router.push({ name: 'Posts.index' })
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
