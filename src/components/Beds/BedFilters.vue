<template>
  <div class="my-5 text-center">
    <div class="text-body-1 mb-2 text-uppercase text-grey">Filters</div>
    <template v-for="(filter, index) in filters">
      <v-btn
        class="ma-2"
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
  name: "BedFilters",
  data() {
    return {
      filters: [
        {
          name: "Ventilator",
          q: { key: "ventilator", value: true },
          active: false,
        },
        {
          name: "ICU",
          q: { key: "icu", value: true },
          active: false,
        },
        {
          name: "Oxygen",
          q: { key: "oxygen", value: true },
          active: false,
        },
      ],
    };
  },
  computed: {
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

        this.$router.push({ query: query });
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>