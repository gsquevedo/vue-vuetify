<template>
    <v-card>
      <v-layout>
        <v-nav-bar></v-nav-bar>
        <v-main style="height: 100vh;"></v-main>
      </v-layout>
    </v-card>
</template>
  
<script>
import vNavBar from "./NavBar.vue";

export default {
    components: {
        vNavBar,
    },
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>

<style scoped>
/* Estilos personalizados para o componente NavMenu.vue */
</style>
 
  