<template>
  <div id="app">
    <div class="sign-out" style="float: right;">
      <el-button type="primary" @click.native="logout">Logout</el-button>
    </div>
    <br><br><br>
    <router-view></router-view>
  </div>
</template>

<script>
import UsersApi from './api/users.js'
import router from './router'

export default {
  name: 'sign-out',
  methods: {
    logout () {
      console.log('methods.logout')
      UsersApi.logout(function (_response) {
        router.push({ name: 'Users.sign_in' })
      })
    }
  }
}
</script>

<style>
</style>
