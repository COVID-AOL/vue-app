<template>
  <div class="my-5 text-center">
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
  name: "BedFilters",
  created() {
    let query = this.$route.query;

    for (let key in query) {
      this.filters.filter((f) => f.id === key)[0].active = true;
    }
  },

  data() {
    return {
      justCreated: false,
      filters: [
        {
          id: "ventilator",
          name: "Ventilator",
          value: true,
          active: false,
        },
        {
          id: "icu",
          name: "ICU",
          value: true,
          active: false,
        },
        {
          id: "oxygen",
          name: "Oxygen",
          value: true,
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