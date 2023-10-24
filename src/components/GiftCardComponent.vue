<template>
  <div @click="openGift(gift)" class="card">
    <img v-if="gift.opened" :src="gift.url" class="card-img-top" :alt="gift.tag">
    <img v-else
      src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="card-img-top" :alt="gift.tag">
    <div class="card-body">
      <p class="card-text">{{ gift.tag }}</p>
    </div>
  </div>
</template>


<script>
import { Gift } from "../models/Gift";
import { giftsService } from "../services/GiftsService"

export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup() {

    return {

      openGift(gift) {
        giftsService.openGift(gift)
      }

    }
  }
};
</script>


<style lang="scss" scoped></style>