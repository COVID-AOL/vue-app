<template>
  <div class="mt-12 mb-2">
    <div class="text-h5 mb-3">RESOURCES AVAILABLE</div>
    <v-card outlined class="mx-auto align-center text-center">
      <template v-for="(resource, index) in resources">
        <v-btn
          @click="buttonClick(resource)"
          :key="'resource' + index"
          class="ma-5"
          :color="resource.theme"
          :elevation="selectedResource === resource.resourceName ? 0 : 4"
          outlined
          dark
          >{{ resource.title }}
          <v-icon dark right>{{ resource.icon }}</v-icon>
        </v-btn>
      </template>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Resources",
  methods: {
    buttonClick(resource) {
      if (resource.resourceName !== this.selectedResource) {
        this.$router.push({ path: resource.link });
      }
    },
  },
  computed: {
    ...mapGetters({
      bedFilters: "bed/filters",
      oxygenCylinderFilters: "oxygenCylinder/filters",
      selectedResource: "selectedResource",
    }),
    resources() {
      let defaultValue = [
        {
          resourceName: "bed",
          title: "Hospitals Beds",
          icon: "mdi-bed",
          theme: "red",
          link: "/hospital-beds?",
        },
        {
          resourceName: "oxygenCylinder",
          title: "Oxygen Cylinders",
          icon: "mdi-gas-cylinder",
          theme: "blue",
          link: "/oxygen-cylinders?",
        },
      ];

      // let bedFilters = this.bedFilters;
      // let oxygenCylinderFilters = this.oxygenCylinderFilters;

      // if (bedFilters !== {}) {
      //   let query = "";
      //   for (let key in bedFilters) {
      //     query += "&" + key + "=" + bedFilters[key];
      //   }

      //   defaultValue[0].link += query;
      // }

      // if (oxygenCylinderFilters !== {}) {
      //   let query = "";
      //   for (let key in oxygenCylinderFilters) {
      //     query += "&" + key + "=" + oxygenCylinderFilters[key];
      //   }

      //   defaultValue[1].link += query;
      // }

      return defaultValue;
    },
  },
};
</script>

<style>
</style>