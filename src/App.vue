<template>
  <v-app>
    <v-main>
      <NavMenu/>
    </v-main>
  </v-app>
</template>

<script>
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',

  components: {
    NavMenu,
  },

  data: () => ({
    //
  }),
}
</script>
<style>
.page{
  width: 210vh;
  height: auto;
}
</style>
