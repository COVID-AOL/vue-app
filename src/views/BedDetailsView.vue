<template>
  <v-container>
    <v-btn
      class="grey white--text darken-1"
      @click="$router.push({ path: '/' })"
    >
      <v-icon small class="mr-3">mdi-arrow-left</v-icon>
      Go Back
    </v-btn>
    <bed-details
      v-if="bedDetails !== null"
      :bedDetails="bedDetails"
    ></bed-details>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BedDetails from "../components/Beds/BedDetails.vue";

export default {
  name: "BedDetailsView",
  async created() {
    this.$store.dispatch("bed/findById", this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      bedDetails: "bed/bedById",
    }),
  },
  components: { BedDetails },
};
</script>

<style>
</style>