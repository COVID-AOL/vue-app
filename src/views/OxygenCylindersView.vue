<template>
  <v-container>
    <resource-types></resource-types>
    <oxygen-cylinder-list></oxygen-cylinder-list>
  </v-container>
</template>

<script>
import ResourceTypes from "@/components/ResourceTypes";
import OxygenCylinderList from "@/components/OxygenCylinders/OxygenCylinderList";

export default {
  name: "OxygenCylindersView",

  components: {
    ResourceTypes,
    OxygenCylinderList,
  },
};
</script>
