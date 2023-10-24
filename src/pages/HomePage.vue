<template>
  <section class="row justify-content-center py-3">
    <div class="col-5">
      <form @submit.prevent="addGift()" class="card p-3">
        <div class="mb-3">
          <input v-model="caption" type="text" class="form-control" id="tag" name="tag" placeholder="Caption" required>
        </div>
        <div class="mb-3">
          <input v-model="imgUrl" type="url" class="form-control" id="url" name="url" placeholder="Img Url" required>
        </div>
        <div class="text-end">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </section>
  <section class="row">
    <div v-for="gift in gifts" :key="gift.id" class="col-md-3 p-3">
      <GiftCardComponent :gift="gift" />
    </div>
  </section>
</template>

<script>
import Pop from "../utils/Pop";
import { giftsService } from "../services/GiftsService"
import { computed, onMounted, ref } from "vue";
import { AppState } from "../AppState";
import GiftCardComponent from "../components/GiftCardComponent.vue";

export default {
  setup() {
    const caption = ref('')
    const imgUrl = ref('')

    async function getGifts() {
      try {
        await giftsService.getGifts();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getGifts();
    });

    return {
      gifts: computed(() => AppState.gifts),
      caption,
      imgUrl,
      async addGift() {
        try {
          const giftData = {
            tag: caption.value,
            url: imgUrl.value
          }
          await giftsService.addGift(giftData)
        }
        catch (error) {
          Pop.error(error)
        }
      }
    };
  },
  components: { GiftCardComponent }
}
</script>

<style scoped lang="scss"></style>
