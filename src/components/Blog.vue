<template>
  <div class="col-12 mt-3">
    <!-- <router-link :to="{name: 'BlogDetails', params: {id: blog.id}}"> -->
    <div class="card blog">
      <img class="card-img-top" :src="blog.imgUrl" alt="blog">
      <div class="card-body">
        <h4 class="card-title">
          {{ blog.title }}
        </h4>
        <p class="card-text">
          {{ blog.body }}
        </p>
        <p class="card-text">
          {{ blog.creator ? blog.creator.name : 'unknown' }}
        </p>
        <div class="card-body absolute bottom text-light p-2 d-flex justify-content-between w-100">
        </div>
        <div class="row text-center justify-content space-evenly mb-2">
          <div class="col-12">
            <button type="button" class="btn btn-outline-primary" @onclick="deleteBlog(creator/id)">
              delete
            </button>
            <button type="button" class="btn btn-outline-primary">
              comment
            </button>
            <button type="button" class="btn btn-outline-primary">
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- </router-link> -->
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'

export default {
  name: 'Blog',
  props: {
    blog: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      creator: computed(() => AppState.creator),

      deletePost() {
        blogsService.delete(props.blog.id)
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.blog:hover {
  transform: translateY(-5px);
  box-shadow: 1px 3px 5px rgb(94, 94, 94);
  cursor: pointer
}

.blog {
  transition: all .2s;
  color: black
}
</style>
