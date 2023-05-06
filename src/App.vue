<template>
  <v-app>
    <v-main>
      <NavDrawer/>
    </v-main>
  </v-app>
</template>

<script>
import NavDrawer from './components/NavDrawer.vue'

export default {
  name: 'App',

  components: {
    NavDrawer,
  },

  data: () => ({
    //
  }),
}
</script>
