<template>
  <div>
    <v-card color="blue lighten-5 mx-auto" max-width="1100">
      <v-card-text>
        <v-row>
          <v-col class="pt-5">
            <span class="text-uppercase">
              Oxygen Cylinder | {{ oxygenCylinder.city }}</span
            >
          </v-col>
          <v-col class="text-right">
            <v-dialog width="600" :v-model="true">
              <template v-slot:activator="{ on, attrs }"
                ><v-btn
                  class="grey white--text darken-2 px-3"
                  elevation="0"
                  v-bind="attrs"
                  v-on="on"
                  @click="viewOxygenCylinder(oxygenCylinder.id)"
                  >View Details
                  <v-icon class="ml-2">mdi-file-document-outline</v-icon>
                </v-btn></template
              >
              <oxygen-cylinder-details
                :oxygenCylinderDetails="oxygenCylinderDetails"
              ></oxygen-cylinder-details>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card-text>

      <v-list class="pa-5 pt-0" three-line color="blue--text">
        <!-- Hospital -->
        <v-list-item-content>
          <span class="text-uppercase">{{ oxygenCylinder.hospitalName }}</span>
        </v-list-item-content>

        <!-- Description -->
        <v-card-text v-if="oxygenCylinder.description !== undefined"
          ><span color="blue--text" class="text-h5">{{
            oxygenCylinder.description
          }}</span>
        </v-card-text>

        <!-- Phone Number -->
        <v-list-item-subtitle v-if="oxygenCylinder.contact !== undefined">
          <span class="font-weight-medium mr-2">Contact:</span>
          <a :href="`tel:+${oxygenCylinder.contact}`">{{
            oxygenCylinder.contact
          }}</a>
        </v-list-item-subtitle>

        <!-- Address -->
        <v-list-item-subtitle v-if="oxygenCylinder.address !== undefined">
          <span class="font-weight-medium mr-2">Address:</span>
          {{ oxygenCylinder.address }}
        </v-list-item-subtitle>

        <v-divider></v-divider>

        <!-- Update At -->
        <div
          class="text-caption black-text"
          v-if="oxygenCylinder.updatedAt !== undefined"
        >
          Last Updated: {{ $moment(oxygenCylinder.updatedAt).fromNow() }}
        </div>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OxygenCylinderDetails from "@/components/OxygenCylinders/OxygenCylinderDetails";

export default {
  name: "OxygenCylinder",
  data() {
    return {
      showModel: false,
    };
  },
  props: {
    oxygenCylinder: {
      type: Object,
      required: true,
      validator: function (value) {
        // TODO:
        return true;
      },
    },
  },
  methods: {
    viewOxygenCylinder(id) {
      this.$store.dispatch("oxygenCylinder/findById", id).then(() => {
        this.showModel = true;
      });
    },
  },
  computed: {
    ...mapGetters({
      oxygenCylinderDetails: "oxygenCylinder/oxygenCylinderById",
    }),
  },
  components: {
    OxygenCylinderDetails,
  },
};
</script>

<style lang="scss" scoped>
</style>