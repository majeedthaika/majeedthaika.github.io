<template>
  <div class="sign-in">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">Sign In</span>
      </div>
      <el-form>
        <el-form-item label="Email">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native="login">Submit</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import UsersApi from '../api/users.js'
import router from '../router'

export default {
  name: 'sign-in',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      UsersApi.login(this.email, this.password, function (_response) {
        router.push({ name: 'Posts.index' })
      })
    }
  }
}
</script>

<style scoped>
</style>
