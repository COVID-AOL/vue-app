<template>
  <v-card color="red lighten-5">
    <v-card-text color="red--text"
      ><span class="text-uppercase"
        >Hospital Bed | {{ bed.city }}</span
      ></v-card-text
    >
    <v-list class="pa-5" three-line color="red--text text--darken-5">
      <!-- Description -->
      <v-list-item-content color="red--text"
        >{{ bed.description }}
      </v-list-item-content>

      <!-- Phone Number -->
      <v-list-item-subtitle>
        Contact: <a :href="`tel:+${bed.contact}`">{{ bed.contact }}</a>
      </v-list-item-subtitle>

      <!-- Number of Beds -->
      <v-list-item-subtitle>Bed Count: {{ bed.bedCount }}</v-list-item-subtitle>

      <v-divider></v-divider>

      <!-- Update At -->
      <div class="text-caption black-text">
        Last Updated: {{ $moment(bed.modified).fromNow() }}
      </div>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Bed",
  props: {
    bed: {
      type: Object,
      required: true,
      validator: function (value) {
        if (
          value.hospital && // check name of the hospital
          value.bedCount >= 1 && // number of beds is atleast 1
          value.city && // name of the city is present
          value.modified && // when was last modified
          value.contact && // contact number is there
          value.description
        )
          return true;
        return false;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>