<template>
  <div class="home-page container">
    <div class="row">
      <div class="card-columns">
        <div class="row">
          <Blog v-for="blogData in state.blogs" :key="blogData._id" :blog="blogData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, reactive } from 'vue'
import { blogsService } from '../services/BlogsService'
import { AppState } from '../AppState'
import Blog from '../components/Blog'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      blogs: computed(() => AppState.blogs)
    })
    onMounted(async() => {
      try {
        await blogsService.getBlogs()
        state.loading = false
      } catch (error) {

      }
    })
    return {
      state

    }
  },
  components: {
    Blog

  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
