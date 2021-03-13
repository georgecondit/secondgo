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
}
export const blogsService = new BlogsService()
