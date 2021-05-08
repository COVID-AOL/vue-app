<template>
  <div>
    <template v-if="loading === true">
      <div class="text-center">
        <v-progress-circular indeterminate color="red"></v-progress-circular>
      </div>
    </template>
    <template v-else-if="bedsList.length > 0">
      <template v-for="(bed, index) in bedsList">
        <bed-list-item :key="'list-item' + index" :bed="bed"></bed-list-item>
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
import BedListItem from "@/components/Beds/BedListItem";
import { mapGetters } from "vuex";

export default {
  name: "BedsList",
  created() {
    this.loading = true;
    if (this.searchText === "")
      this.$store.dispatch("bed/find").then(() => {
        this.loading = false;
      });
    else {
      this.$store.dispatch("bed/findByCity", this.searchText).then(() => {
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
      bedsList: "bed/list",
      searchText: "searchBar/searchText",
    }),
  },
  components: {
    BedListItem,
  },
};
</script>

<style>
</style>