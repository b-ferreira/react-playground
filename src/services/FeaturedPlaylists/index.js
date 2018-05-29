import { BoilerplateHttp } from '@/utils/HttpProxy'
import FiltersFallback from './FiltersFallback.json'

/**
 * Class used to fetch all the information related to Featured Playlists.
 *
 * @class FeaturedPlaylistsService
 */
class FeaturedPlaylistsService {
  static async fetchList (filters) {
    const Http = BoilerplateHttp()
    try {
      return await Http.get('/featured-playlists', {
        params: {
          ...filters
        }
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  static async fetchFilters () {
    const Http = BoilerplateHttp()
    let result = null
    try {
      result = await Http.withoutPrefix().get(process.env.REACT_APP_FILTERS_URL)
    } catch (err) {
      result = FiltersFallback
    }
    return result
  }
}

export default FeaturedPlaylistsService
