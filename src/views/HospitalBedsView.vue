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
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  props: {
    hospitalBedsQuery: {
      type: Object,
    },
  },
  watch: {
    hospitalBedsQuery(newValue, oldValue) {
      this.$store.dispatch("bed/changeFilters", newValue);
    },
  },
  computed: {
    ...mapGetters({
      bedFilters: "bed/filters",
    }),
  },
  components: {
    ResourceTypes,
    BedList,
    BedFilters,
  },
};
</script>
