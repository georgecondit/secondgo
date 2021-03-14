import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { sandboxApi } from './AxiosService'

class BlogsService {
  async getBlogs() {
    try {
      const res = await sandboxApi.get('api/blogs')
      AppState.blogs = res.data
      logger.log(res.data)
    } catch (error) {
      logger.log(error)
    }
  }

  async createBlog(newBlog) {
    try {
      const res = await sandboxApi.post('api/blogs', newBlog)
      AppState.blogs.push(res.data)
      logger.log(res.data)
      this.getBlogs()
    } catch (error) {
      logger.error(error)
    }
  }
}
export const blogsService = new BlogsService()
