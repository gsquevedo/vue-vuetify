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
  height: 100vh;
  width: 210vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
