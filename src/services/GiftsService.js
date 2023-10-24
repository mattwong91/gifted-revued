import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class GiftsService {

  async getGifts() {
    const response = await api.get('api/gifts')
    const gifts = response.data.map(plainObject => new Gift(plainObject))
    AppState.gifts = gifts
  }

  openGift(gift) {
    gift.opened = true
  }
}

export const giftsService = new GiftsService()