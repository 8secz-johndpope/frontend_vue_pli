<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card>
          <v-img :src="'/' + products[productId].name + '.jpg'" aspect-ratio="1.5" />
          <v-card-title>
            <h1>{{products[productId].name}}</h1>
          </v-card-title>
          <v-card-text class="card-product-description">{{products[productId].description}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-layout column class="card-product-interaction-panel">
          <v-flex>
            <v-card class="card-product-interaction-section">
              <v-card-text
                class="card-product-description-produit"
              >{{products[productId].descriptionProduit}}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card class="card-product-interaction-section">
              <v-card-text class="card-product-interaction">
                <v-layout row>
                  <v-flex xs12 md8>
                    <v-layout row wrap>
                      <v-flex>
                        <v-btn @click="number > 0 ? number-- : number">-</v-btn>
                      </v-flex>
                      <v-flex>
                        <v-btn @click="number++">+</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12 md4>
                    <h1>{{number}}</h1>
                  </v-flex>
                </v-layout>
                <v-btn block>Ajouter au panier</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ProductsView",
  props: ["shops"],
  data() {
    return {
      shopId: this.$route.params.shopId,
      productId: this.$route.params.productId,
      number: 0
    };
  },
  computed: {
    products() {
      return this.shops[this.shopId].products;
    }
  },
  watch: {
    $route(to, from) {
      this.shopId = this.$route.params.shopId;
    }
  }
};
</script>

<style scoped>
.card-product-description {
  height: 100px;
  overflow-y: auto;
}

.card-product-interaction-section,
.card-product-interaction-panel,
.card-product-interaction {
  height: 100%;
}
</style>