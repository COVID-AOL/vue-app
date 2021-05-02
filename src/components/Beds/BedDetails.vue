<template>
  <v-card>
    <div v-for="(bedDetail, index) in bed" :key="'bedDetail' + index">
      {{ index }}
      <br />
      {{ bedDetail }}
      <v-divider></v-divider>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "BedDetails",
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

<style>
</style>