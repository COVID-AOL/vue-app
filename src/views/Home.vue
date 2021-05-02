<template>
  <v-container>
    <resource-types></resource-types>
    <beds-list></beds-list>
  </v-container>
</template>

<script>
import ResourceTypes from "@/components/ResourceTypes";
import BedsList from "@/components/Beds/BedList";

export default {
  name: "Home",

  components: {
    ResourceTypes,
    BedsList,
  },
};
</script>
