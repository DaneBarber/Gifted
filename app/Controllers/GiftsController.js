import { ProxyState } from "../AppState.js"
import { giftsService } from "../Services/GiftsService.js"
import { Pop } from "../Utils/Pop.js"

function _drawGifs() {
  let template = ''
  ProxyState.ourGifts.forEach(g => template += g.Template)
  console.log('hello _drawGifs');
  document.getElementById('gifyRes').innerHTML = template
  // console.log(template)
}

export class GiftsController {
  constructor() {
    this.getGifts()
    ProxyState.on('ourGifts', _drawGifs)
    _drawGifs()
  }
  async getGifts() {
    try {
      await giftsService.getGift()
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.log(error)
    }
  }
  async changeQ(input) {
    console.log(input)
    await giftsService.changeQ(input)
    this.getGifts()
  }

}