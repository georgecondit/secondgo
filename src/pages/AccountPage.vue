<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h1>My Bloggery</h1>
      </div>

      <div class="col-6 text-center mt-4">
        <div class="about text-center">
          <h3>Welcome {{ account.name }}</h3>
          <img class="rounded" :src="account.picture" alt="" />
          <p>{{ account.email }}</p>
        </div>
        <div class="col-12">
          <div class="card">
            <!-- <Blogs v-for="blog in state.blogs" :key="blog._id" :blog="blog" /> -->
          </div>
        </div>
      </div>

      <div class="col-6 mt-4">
        Jot Bloggery Formery
        <div class="row">
          <div class="col-12">
            <form @click.prevent="createBlog()">
              <div class="my-4">
                <label for="title" class="input-group-text  tag-font1">Subjectery?</label>
                <input class="form-control" type="text" v-model="state.newBlog.title">
              </div>
              <div class="my-2">
                <label for="body" class="input-group-text">Bloggery?</label>
                <input class="form-control" type="text" v-model="state.newBlog.body">
              </div>
              <div class="my-2">
                <label for="basic-url" class="input-group-text">Imagery?</label>
                <input class="form-control" type="text" v-model="state.newBlog.imgUrl">
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-success bold btn-block tag-font1" type="submit">
                  <h3>
                    Jot Bloggery
                  </h3>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { logger } from '../utils/Logger'
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
export default {
  name: 'Account',
  setup() {
    const state = reactive({
      newBlog: {
        title: '',
        body: ''
      }
    })
    return {
      state,
      async createBlog() {
        try {
          await blogsService.createBlog(state.newBlog)
          state.newBlog = {}
        } catch (error) {
          logger.log(error)
        }
      },
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
