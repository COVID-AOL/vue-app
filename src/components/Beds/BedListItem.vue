<template>
  <div>
    <v-card color="red lighten-5 mx-auto" max-width="1100">
      <v-card-text>
        <v-row>
          <v-col class="pt-5">
            <span class="text-uppercase"> Hospital Bed | {{ bed.city }}</span>
          </v-col>
          <v-col class="text-right">
            <v-dialog width="600" :v-model="true">
              <template v-slot:activator="{ on, attrs }"
                ><v-btn
                  class="grey white--text darken-2 px-3"
                  elevation="0"
                  v-bind="attrs"
                  v-on="on"
                  @click="viewBed(bed.id)"
                  >View Details
                  <v-icon class="ml-2">mdi-file-document-outline</v-icon>
                </v-btn></template
              >
              <bed-details :bedDetails="bedDetails"></bed-details>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card-text>

      <v-list class="pa-5 pt-0" three-line color="red--text">
        <!-- Hospital -->
        <v-list-item-content>
          <span class="text-uppercase">{{ bed.hospitalName }}</span>
        </v-list-item-content>

        <!-- Description -->
        <v-card-text v-if="bed.description !== undefined"
          ><span color="red--text" class="text-h5">{{ bed.description }}</span>
        </v-card-text>

        <!-- Phone Number -->
        <v-list-item-subtitle v-if="bed.contact !== undefined">
          <span class="font-weight-medium mr-2">Contact:</span>
          <a :href="`tel:+${bed.contact}`">{{ bed.contact }}</a>
        </v-list-item-subtitle>

        <!-- Number of Beds -->
        <v-list-item-subtitle v-if="bed.bedCount !== undefined">
          <span class="font-weight-medium mr-2">Bed Count:</span>
          {{ bed.bedCount }}
        </v-list-item-subtitle>

        <!-- Address -->
        <v-list-item-subtitle v-if="bed.address !== undefined">
          <span class="font-weight-medium mr-2">Address:</span>
          {{ bed.address }}
        </v-list-item-subtitle>

        <v-divider></v-divider>

        <!-- Update At -->
        <div class="text-caption black-text" v-if="bed.updatedAt !== undefined">
          Last Updated: {{ $moment(bed.updatedAt).fromNow() }}
        </div>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BedDetails from "@/components/Beds/BedDetails";

export default {
  name: "Bed",
  data() {
    return {
      showModel: false,
    };
  },
  props: {
    bed: {
      type: Object,
      required: true,
      validator: function (value) {
        // TODO:
        return true;
      },
    },
  },
  methods: {
    viewBed(id) {
      this.$store.dispatch("bed/findById", id).then(() => {
        this.showModel = true;
      });
    },
  },
  computed: {
    ...mapGetters({
      bedDetails: "bed/bedById",
    }),
  },
  components: {
    BedDetails,
  },
};
</script>

<style lang="scss" scoped>
</style>