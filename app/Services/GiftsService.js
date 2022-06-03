import { ProxyState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"

let gifyAPI = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  timeout: 8000
})

let sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api",
  timeout: 8000
})

// hardcoding the api_key, gif rating, and the q query
let params = {
  api_key: 'ThaFaJ1ZELJaP3IPPTEtWSwx7BgYuWQf',
  rating: 'pg',
  q: 'dog'
}


class GiftsService {
  async getGift() {
    const res = await gifyAPI.get('search', { params })
    console.log('res', res)
    const gifts = res.data.data.map(g => new Gift(g))
    console.log(gifts)
    ProxyState.gifts = gifts
    ProxyState.ourGifts = gifts
    console.log(ProxyState.ourGifts)
  }

  async changeQ(input) {
    console.log(params)
    console.log(input)
    params[2] = input;
  }

}

export const giftsService = new GiftsService()