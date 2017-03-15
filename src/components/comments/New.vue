<template>
  <div class="new-comment">
    <el-card class="box-card">
      <el-form>
        <el-form-item label="Add Comment">
          <el-input v-model="comment.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native="createComment">Save</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import CommentsApi from '../../api/comments.js'
import router from '../../router'

export default {
  name: 'new-comment',
  data () {
    return {
      comment: {
        content: ''
      }
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  },
  methods: {
    createComment () {
      var postId = this.post.id
      var content = this.comment.content
      this.comment.content = ''
      CommentsApi.createComment(postId, content,
        function (_comment) {
          console.log(_comment)
          router.push({ name: 'Posts.show', params: { post_id: postId }, query: { t: new Date() } })
        }
      )
    }
  }
}
</script>

<style scoped>
</style>
