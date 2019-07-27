<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-card>
                <v-img :src="'/' + shops[shopId].name + '.jpg'" aspect-ratio="1.5" />
              </v-card>
            </v-flex>
            <v-flex xs12 md6>
              <v-card class="card-shop-text">
                <v-card-title>
                  <h1>This is {{ shops[shopId].name }}</h1>
                </v-card-title>
                <v-card-text>{{ shops[shopId].description }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <br />
    <v-layout row wrap>
      <ProductsItem
        v-for="(product, index) in shops[shopId].products"
        v-bind:key="product.shopId"
        v-bind:product="product"
        v-bind:index="index"
        v-bind:shopId="shopId"
      />
    </v-layout>
  </v-container>
</template>

<script>
import ProductsItem from "./ProductsItem";

export default {
  name: "Products",
  components: {
    ProductsItem
  },
  props: ["shops"],
  data() {
    return {
      shopId: this.$route.params.shopId
    };
  },
  watch: {
    $route(to, from) {
      this.shopId = this.$route.params.shopId;
    }
  }
};
</script>

<style scoped>
.card-shop-text {
  height: 100%;
}
</style>