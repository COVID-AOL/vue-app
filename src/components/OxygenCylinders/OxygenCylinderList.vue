<template>
  <div>
    <template v-if="bedsList.length > 0">
      <template v-for="(oxygenCylinder, index) in bedsList">
        <oxygen-cylinder-list-item
          :key="'list-item' + index"
          :oxygenCylinder="oxygenCylinder"
        ></oxygen-cylinder-list-item>
        <br :key="'br' + index" />
      </template>
    </template>
    <template v-else>
      <v-card>
        <v-card-text>
          <span class="headline" v-if="searchText !== ''">
            No Results Found for City <strong>{{ searchText }}</strong>
          </span>
          <span v-else class="headline">No Results Found!</span>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script>
import OxygenCylinderListItem from "@/components/OxygenCylinders/OxygenCylinderListItem";
import { mapGetters } from "vuex";

export default {
  name: "OxygenCylindersList",
  async created() {
    if (this.searchText === "") this.$store.dispatch("oxygenCylinder/find");
    else this.$store.dispatch("oxygenCylinder/findByCity", this.searchText);
  },
  computed: {
    ...mapGetters({
      bedsList: "oxygenCylinder/list",
      searchText: "searchBar/searchText",
    }),
  },
  components: {
    OxygenCylinderListItem,
  },
};
</script>

<style>
</style>