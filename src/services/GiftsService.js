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

  async openGift(gift) {
    gift.opened = true
  }

  async addGift(giftData) {
    const response = await api.post('api/gifts', giftData)
    logger.log(response.data)
  }
}

export const giftsService = new GiftsService()