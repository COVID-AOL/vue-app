<template>
  <v-app>
    <v-main>
      <v-app-bar app dark>
        <div class="d-flex align-center">Get Covid Help</div>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
