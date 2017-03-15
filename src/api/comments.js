import Vue from 'vue'

export default {
  getComments (postId, callback, errCallback) {
    Vue.$http.get(`/posts/${postId}/comments.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log(response)
    })
  },
  createComment (postId, content, callback, errCallback) {
    var commentParams = { comment: { content: content } }
    Vue.$http.post(`/posts/${postId}/comments.json`, commentParams)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log(response)
    })
  }
}
