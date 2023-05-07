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
  margin-top: 150px;
}
</style>
