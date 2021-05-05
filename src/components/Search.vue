<template>
  <v-row>
    <v-text-field
      v-model="textInput"
      solo
      type="text"
      label="Search By City"
      append-outer-icon="mdi-magnify"
      @click:append-outer="sendMessage"
    ></v-text-field>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      textInput: "",
    };
  },
  methods: {
    sendMessage() {
      this.$store.dispatch("bed/findByCity", this.searchText);
    },
  },
  computed: {
    searchText() {
      return this.textInput.trim();
    },
    selectedResource() {
      if (this.$route.path.includes("/hospital-beds") === true) return "bed";
    },
  },
  watch: {
    searchText(newValue, oldValue) {
      this.$store.dispatch("searchBar/changeSearchText", newValue);

      if (newValue === "") this.$store.dispatch("bed/find", newValue);
      else
        this.$store.dispatch(`${this.selectedResource}/findByCity`, newValue);
    },
  },
};
</script>

<style>
</style>