<template>
  <v-container>
    <resource-types></resource-types>
    <oxygen-cylinder-filters></oxygen-cylinder-filters>
    <oxygen-cylinder-list></oxygen-cylinder-list>
  </v-container>
</template>

<script>
import ResourceTypes from "@/components/ResourceTypes";
import OxygenCylinderList from "@/components/OxygenCylinders/OxygenCylinderList";
import OxygenCylinderFilters from "@/components/OxygenCylinders/OxygenCylinderFilters";

export default {
  name: "OxygenCylindersView",
  props: {
    oxygenCylindersQuery: {
      type: Object,
    },
  },
  created() {
    this.$store.dispatch("oxygenCylinder/changeFilters", this.$route.query);
  },
  watch: {
    oxygenCylindersQuery(newValue, oldValue) {
      this.$store.dispatch("oxygenCylinder/changeFilters", newValue);
    },
  },
  components: {
    ResourceTypes,
    OxygenCylinderList,
    OxygenCylinderFilters,
  },
};
</script>