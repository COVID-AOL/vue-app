<template>
  <v-container>
    <resource-types></resource-types>
    <bed-filters></bed-filters>
    <bed-list></bed-list>
  </v-container>
</template>

<script>
import ResourceTypes from "@/components/ResourceTypes";
import BedList from "@/components/Beds/BedList";
import BedFilters from "@/components/Beds/BedFilters";

export default {
  name: "HomeView",
  props: {
    hospitalBedsQuery: {
      type: Object,
    },
  },
  created() {
    this.$store.dispatch("bed/changeFilters", this.$route.query);
  },
  watch: {
    hospitalBedsQuery(newValue, oldValue) {
      this.$store.dispatch("bed/changeFilters", newValue);
    },
  },
  components: {
    ResourceTypes,
    BedList,
    BedFilters,
  },
};
</script>
