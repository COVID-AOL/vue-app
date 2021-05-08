<template>
  <v-app>
    <v-app-bar color="grey darken-3" dark fixed>
      <div class="d-flex align-center cursor-pointer">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title class="ml-2 d-none d-md-inline"
          >Get Covid Help</v-toolbar-title
        >
      </div>
      <v-row class="mt-4 mx-5">
        <v-col md="8" sm="7" offset-sm="2" offset-md="1"
          ><search></search
        ></v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <div class="spacer"></div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "@/components/Search";

export default {
  name: "App",
  created() {
    this.$route.query;
  },
  data: () => ({
    queryInRoute: {},
  }),
  components: {
    Search,
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("searchBar/changeSearchText", "");

      if (this.$route.path.includes("/hospital-beds") === true)
        this.$store.dispatch("changeSelectedResource", "bed");
      else if (this.$route.path.includes("/oxygen-beds") === true)
        this.$store.dispatch("changeSelectedResource", "oxygenCylinder");
    },
  },
  computed: {
    ...mapGetters({
      selectedResource: "selectedResource",
    }),
  },
};
</script>

<style lang="scss">
.cursor-pointer {
  cursor: pointer;
}
.spacer {
  height: 30px;
}
html {
  font-family: "Roboto", sans-serif;
}
</style>
