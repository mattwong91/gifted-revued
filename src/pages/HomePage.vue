<template>
  <section class="row">
    <div v-for="gift in gifts" :key="gift.id" class="col-md-4 p-3">
      <GiftCardComponent :gift="gift" />
    </div>
  </section>
</template>

<script>
import Pop from "../utils/Pop";
import { giftsService } from "../services/GiftsService"
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import GiftCardComponent from "../components/GiftCardComponent.vue";

export default {
  setup() {
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
      gifts: computed(() => AppState.gifts)
    };
  },
  components: { GiftCardComponent }
}
</script>

<style scoped lang="scss"></style>
