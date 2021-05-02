<template>
  <div>
    <template v-for="(bed, index) in bedsList">
      <bed-list-item :key="'list-item' + index" :bed="bed"></bed-list-item>
      <br :key="'br' + index" />
    </template>
  </div>
</template>

<script>
import BedListItem from "@/components/Beds/BedListItem";
import { mapGetters } from "vuex";

export default {
  name: "BedsList",
  computed: {
    ...mapGetters({
      bedsList: "beds/list",
    }),
  },
  components: {
    BedListItem,
  },
};
</script>

<style>
</style>