<template>
  <v-card outlined class="mx-auto my-12">
    <v-card-title class="headline pa-5">RESOURCES AVAILABLE</v-card-title>
    <template v-for="[title, icon] in resources">
      <v-btn :key="title" class="ma-5" color="red" dark
        >{{ title }}
        <v-icon dark right>{{ icon }}</v-icon>
      </v-btn>
    </template>
  </v-card>
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
        ],
      ],
    };
  },
};
</script>

<style>
</style>