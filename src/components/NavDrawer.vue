<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item>
            <template #prepend>
              <v-avatar size="35">
                <v-img :src="image" alt="user"></v-img>
              </v-avatar>
            </template>
            <v-list-item-content>
              <v-list-item-title> Gabriele Quevedo </v-list-item-title>
              <v-list-item-subtitle> Web Developer </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder"><router-link to="/">Home</router-link></v-list-item>
          <v-list-item prepend-icon="mdi-star"><router-link to="/about">Sobre</router-link></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple"><router-link to="/contact">Contato</router-link></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view></router-view>
      <v-main style="height: 100vh;"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
import image from "../assets/foto.jpeg"

export default {
  name: 'NavDrawer',
  data() {
    return {
      image,
    }
  }
}
</script>
