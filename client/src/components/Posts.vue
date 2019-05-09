<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="post in posts" v-bind:key="post">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import postTest from '@/services/postTest'

export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
    this.postNewPost()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data
    },
    async postNewPost () {
      postTest.postNewPost()
    }
  }
}
</script>
