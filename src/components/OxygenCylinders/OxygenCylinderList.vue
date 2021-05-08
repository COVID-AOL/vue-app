<template>
  <div>
    <template v-if="loading === true">
      <div class="text-center">
        <v-progress-circular indeterminate color="blue"></v-progress-circular>
      </div>
    </template>
    <template v-else-if="bedsList.length > 0">
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
  created() {
    this.loading = true;
    if (this.searchText === "")
      this.$store.dispatch("oxygenCylinder/find").then(() => {
        this.loading = false;
      });
    else {
      this.$store
        .dispatch("oxygenCylinder/findByCity", this.searchText)
        .then(() => {
          this.loading = false;
        });
    }
  },
  data() {
    return {
      loading: null,
    };
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