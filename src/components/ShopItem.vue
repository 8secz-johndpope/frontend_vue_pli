<template>
  <v-flex xs12 sm4 md3 lg2>
    <v-card>
      <v-img :src="'/' + shop.name + '.jpg'" aspect-ratio="1.5" />
      <v-card-title>
        <h2>{{ shop.name }}</h2>
      </v-card-title>
      <v-card-text class="card-shop-description">{{ shop.description }}</v-card-text>
      <v-card-actions>
        <v-btn :to="'/shops/' + index" block>Fiche magasin</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "ShopItem",
  props: ["shop", "index"]
};
</script>

<style scoped>
.card-shop-description {
  height: 80px;
  overflow-y: hidden;
}
</style>