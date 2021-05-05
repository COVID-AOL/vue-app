<template>
  <div class="my-12">
    <div class="text-h5 mb-3">RESOURCES AVAILABLE</div>
    <v-card outlined class="mx-auto">
      <!-- <v-card-title class="headline pa-5"></v-card-title> -->
      <template v-for="[title, icon, color, link] in resources">
        <v-btn
          @click="$router.push({ path: link })"
          :key="title"
          class="ma-5"
          :color="color"
          dark
          >{{ title }}
          <v-icon dark right>{{ icon }}</v-icon>
        </v-btn>
      </template>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Resources",
  data() {
    return {
      resources: [
        [
          "Hospitals Beds", // title
          "mdi-bed", // icon
          "red", // color theme
          "/hospital-beds", // page link
        ],
        [
          "Oxygen Cylinders", // title
          "mdi-gas-cylinder", // icon
          "blue", // color theme
          "/oxygen-cylinders", // page link
        ],
      ],
    };
  },
};
</script>

<style>
</style>