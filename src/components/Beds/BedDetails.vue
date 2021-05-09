<template>
  <v-card class="my-3" max-width="600" color="red lighten-5">
    <v-card-title class="text-uppercase">
      <v-row justify="space-between">
        <v-col class="text-left">Hospital Bed</v-col>
        <v-col class="text-right">{{ bedDetails.city }}</v-col>
      </v-row>
    </v-card-title>
    <v-subheader>
      <v-row justify="space-between">
        <v-col class="text-left">Updated</v-col>
        <v-col class="text-right">
          {{ $moment(bedDetails.updatedAt).fromNow() }}
        </v-col>
      </v-row>
    </v-subheader>
    <v-divider></v-divider>
    <br />

    <!-- Beds Available -->
    <template v-if="bedDetails.bedCount !== undefined">
      <div class="text-body-2 px-4 grey--text text--darken-2">
        <v-row justify="space-between">
          <v-col class="text-left">Beds Available</v-col>
          <v-col class="text-right">
            <span class="text-h4 font-weight-light">{{
              bedDetails.bedCount
            }}</span>
          </v-col>
        </v-row>
      </div></template
    >

    <!-- Verified -->
    <template v-if="bedDetails.verified !== undefined">
      <div class="text-body-2 px-4 grey--text text--darken-2">
        <v-row justify="space-between">
          <v-col class="text-left">Verified</v-col>
          <v-col class="text-right">
            <v-icon v-if="bedDetails.verified === true" color="green"
              >mdi-shield-check</v-icon
            >
            <v-icon v-else color="red">mdi-do-not-disturb</v-icon>
          </v-col>
        </v-row>
      </div></template
    >

    <!-- Hospital Name -->
    <template v-if="bedDetails.hospitalName !== undefined">
      <div class="text-body-2 px-4 grey--text text--darken-2">
        <v-row justify="space-between">
          <v-col class="text-left">Hospital Name</v-col>
          <v-col class="text-right">
            {{ bedDetails.hospitalName }}
          </v-col>
        </v-row>
      </div></template
    >

    <!-- Contact -->
    <template v-if="bedDetails.contact !== undefined">
      <div class="text-body-2 px-4 grey--text text--darken-2">
        <v-row justify="space-between">
          <v-col class="text-left">Contact</v-col>
          <v-col class="text-right"
            ><a :href="`tel:${bedDetails.contact}`">{{
              bedDetails.contact
            }}</a></v-col
          >
        </v-row>
      </div></template
    >

    <!-- Address -->
    <template v-if="bedDetails.address !== undefined">
      <div class="text-body-2 px-4 grey--text text--darken-2">
        <v-row>
          <v-col cols="3" class="text-left">Address</v-col>
          <v-col cols="9" class="text-right flex-grow-1">
            {{ bedDetails.address }}
          </v-col>
        </v-row>
      </div></template
    >

    <!-- Email Address -->
    <template v-if="bedDetails.email !== undefined">
      <div class="text-body-2 px-4 grey--text text--darken-2">
        <v-row>
          <v-col class="text-left">Email</v-col>
          <v-col class="text-right flex-grow-1">
            <a :href="`mailto:${bedDetails.email}`">{{ bedDetails.email }}</a>
          </v-col>
        </v-row>
      </div></template
    >
  </v-card>
</template>

<script>
export default {
  name: "BedDetails",
  props: {
    bedDetails: {
      type: Object,
      validator: function (value) {
        return true;
        // TODO: Write validator function
      },
    },
  },
};
</script>

<style>
</style>