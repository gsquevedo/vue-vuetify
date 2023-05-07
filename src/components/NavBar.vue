<template>
    <v-app-bar>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">Vue 3</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        class="mx-4"
        v-model="search"
        append-icon="mdi-magnify"
        placeholder="Digite sua pesquisa"
        outlined
        hide-details
      ></v-text-field>
      <v-btn icon><v-icon>mdi-calendar</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-tooltip</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-bell</v-icon></v-btn>
      <v-list>
        <v-list-item>
          <template #prepend>
            <v-avatar size="35">
              <v-img :src="image" alt="user"></v-img>
            </v-avatar>
          </template>
          <v-list-item-content>
            <v-list-item-title>Gabriele Quevedo</v-list-item-title>
            <v-list-item-subtitle>Web Developer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn icon><v-icon>mdi-arrow-down-drop-circle-outline</v-icon></v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder"><router-link class="menu-item" to="/">Home</router-link></v-list-item>
          <v-list-item prepend-icon="mdi-star"><router-link class="menu-item" to="/lista">Tarefas</router-link></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple"><router-link class="menu-item" to="/graficos">Gráficos</router-link></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
</template>
  
<script>
import image from "../assets/foto.jpeg";

export default {
    data() {
        return {
          search: "",
          image,
          drawer: false,
        };
    },
    methods: {
    },
};
</script>

<style scoped>
.menu-item {
  display: block;
  color: #333;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none; 
}

.menu-item:hover {
  background-color: #eee;
}

</style>