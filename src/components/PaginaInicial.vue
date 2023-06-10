<template>
    <div class="home">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h1 class="text-center">Bem-vindo à Página Inicial</h1>
            <p class="text-center">Veja algumas imagens incríveis:</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(image, index) in images" :key="index" cols="12" md="4" lg="3">
            <v-card class="image-card">
              <v-img :src="image.url" height="200" alt="Imagem"></v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-text-field v-model="searchQuery" label="Pesquisar" outlined clearable class="search-field"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(item, index) in filteredItems" :key="index" cols="12" md="6">
            <v-card class="item-card">
              <v-card-text>{{ item }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-btn color="primary" class="action-button">Clique aqui</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
  
  
<script>
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.png";

export default {
    data() {
      return {
        images: [
          { url: image1 },
          { url: image2 },
        ],
        searchQuery: '',
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            // Adicione mais itens conforme necessário
        ]
        };
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => item.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    }
};
</script>

<style scoped>
.home {
  padding: 20px;
  margin-top: 50px;
  margin-left: 300px;
  width: 100vh;
  height: auto;
}
.text-center {
  text-align: center;
}

.image-card {
  margin-bottom: 20px;
}

.search-field {
  margin-bottom: 20px;
}

.item-card {
  margin-bottom: 20px;
}

.action-button {
  margin-top: 20px;
}
</style>