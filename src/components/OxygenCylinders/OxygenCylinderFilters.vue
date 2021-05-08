<template>
  <div class="mb-10 text-center">
    <div class="text-body-1 mb-2 text-uppercase text-grey">Filters</div>
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
  data() {
    return {
      filters: [
        {
          name: "refill",
          q: { key: "refill", value: true },
          active: false,
        },
        {
          name: "empty",
          q: { key: "empty", value: true },
          active: false,
        },
        {
          name: "filled",
          q: { key: "filled", value: true },
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
          if (element.active === true) query[element.q.key] = element.q.value;
        });

        this.$router.push({ query: query }).catch(() => {});
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>