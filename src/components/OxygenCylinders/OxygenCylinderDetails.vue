<template>
  <v-card class="my-3" max-width="600" color="blue lighten-5">
    <v-card-title class="text-uppercase">
      <v-row justify="space-between">
        <v-col class="text-left">Oxygen Cylinder</v-col>
        <v-col class="text-right">{{ oxygenCylinderDetails.city }}</v-col>
      </v-row>
    </v-card-title>
    <v-subheader>
      <v-row justify="space-between">
        <v-col class="text-left">Updated</v-col>
        <v-col class="text-right">
          {{ $moment(oxygenCylinderDetails.updatedAt).fromNow() }}
        </v-col>
      </v-row>
    </v-subheader>
    <v-divider></v-divider>
    <br />

    <!-- Name -->
    <template v-if="oxygenCylinderDetails.name !== undefined">
      <div class="text-body-2 px-4 grey--text text--darken-2">
        <v-row justify="space-between">
          <v-col class="text-left">Name</v-col>
          <v-col class="text-right">
            {{ oxygenCylinderDetails.name }}
          </v-col>
        </v-row>
      </div></template
    >

    <!-- Verified -->
    <template v-if="oxygenCylinderDetails.verified !== undefined">
      <div class="text-body-2 px-4 grey--text text--darken-2">
        <v-row justify="space-between">
          <v-col class="text-left">Verified</v-col>
          <v-col class="text-right">
            <v-icon v-if="oxygenCylinderDetails.verified === true" color="green"
              >mdi-shield-check</v-icon
            >
            <v-icon v-else color="red">mdi-do-not-disturb</v-icon>
          </v-col>
        </v-row>
      </div></template
    >

    <!-- Contact -->
    <template v-if="oxygenCylinderDetails.contact !== undefined">
      <div class="text-body-2 px-4 grey--text text--darken-2">
        <v-row justify="space-between">
          <v-col class="text-left">Contact</v-col>
          <v-col class="text-right"
            ><a :href="`tel:${oxygenCylinderDetails.contact}`">{{
              oxygenCylinderDetails.contact
            }}</a></v-col
          >
        </v-row>
      </div></template
    >
  </v-card>
</template>

<script>
export default {
  name: "OxygenCylinderDetails",
  props: {
    oxygenCylinderDetails: {
      // type: Object,
      // validator: function (value) {
      //   return true;
      //   // TODO: Write validator function
      // },
    },
  },
};
</script>

<style>
</style>