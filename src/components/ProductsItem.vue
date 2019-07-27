<template>
  <v-flex xs12 sm4 md3 lg2>
    <v-card>
      <v-img :src="'/' + product.name + '.jpg'" aspect-ratio="1.5" />
      <v-card-title>
        <h2>{{product.name}}</h2>
      </v-card-title>
      <v-card-text class="card-product-description">{{product.description}}</v-card-text>
      <v-card-actions>
        <v-btn :to="'/shops/' + shopId + '/products/' + index" block>Fiche produit</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "ProductsItem",
  props: ["product", "index", "shopId"]
};
</script>

<style scoped>
.card-product-description {
  height: 80px;
  overflow-y: hidden;
}
</style>