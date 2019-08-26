import axios from 'axios'
import { from, defer } from 'rxjs'
import { API_BASE_URL } from '../constants/config'

const apiReq = (args) => {
  return defer(() => {
    const baseUrl = args.url || API_BASE_URL
    let config = {
      url: baseUrl + args.uri,
      method: args.method,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (args.body) {
      config = { ...config, data: args.body }
    }
    if (args.params) {
      config = { ...config, params: args.params }
    }
    config = {
      ...config,
      headers: {
        ...config.headers,
      },
    }
    return from(axios(config))
  })
}

export default apiReq
