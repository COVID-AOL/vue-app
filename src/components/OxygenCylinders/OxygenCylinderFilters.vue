<template>
  <div class="mb-10 text-center">
    <div class="text-body-1 mb-2 text-capitalize text-grey">Filters</div>
    <template v-for="(filter, index) in filters">
      <v-btn
        class="ma-2 text-capitalize"
        :color="filter.active === true ? '' : ''"
        :outlined="filter.active !== true"
        @click="filter.active = !filter.active"
        :elevation="filter.active === true ? 0 : 4"
        :key="index + 'v-list-item'"
      >
        {{ filter.name }}
      </v-btn>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OxygenCylinderFilters",
  created() {
    let query = this.$route.query;

    for (let key in query) {
      this.filters.filter((f) => f.id === key)[0].active = true;
    }
  },
  data() {
    return {
      filters: [
        {
          id: "refill",
          name: "Refill Available",
          value: true,
          active: false,
        },
        {
          id: "empty",
          name: "Empty",
          value: true,
          active: false,
        },
        {
          id: "filled",
          name: "Filled",
          value: true,
          active: false,
        },
      ],
    };
  },
  computed: {
    selectedFilters() {
      return this.filters.filter((element) => {
        element.active === true;
      });
    },
    ...mapGetters({
      bedFilters: "bed/filters",
    }),
  },
  watch: {
    filters: {
      handler(newValue, oldValue) {
        let query = {};
        newValue.forEach((element) => {
          if (element.active === true) query[element.id] = element.value;
        });

        this.$router.push({ query: query });
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>