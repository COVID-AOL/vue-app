<template>
  <v-row>
    <v-text-field
      v-model="searchText"
      solo
      type="text"
      label="Search By City"
      append-outer-icon="mdi-magnify"
      @click:append-outer="sendMessage"
    ></v-text-field>
  </v-row>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    sendMessage() {
      this.$store.dispatch("bed/findByCity", this.searchText);
    },
  },
  watch: {
    searchText(newValue, oldValue) {
      if (newValue === "") this.$store.dispatch("bed/find", newValue);
      else this.$store.dispatch("bed/findByCity", newValue);

      if (this.$router.currentRoute.path !== "/") {
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style>
</style>