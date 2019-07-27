<template>
  <v-container>
    <v-layout row wrap>
      <ShopItem
        v-for="(shop, index) in shops"
        v-bind:key="shop.id"
        v-bind:shop="shop"
        v-bind:index="index"
      />
    </v-layout>
  </v-container>
</template>

<script>
import ShopItem from "./ShopItem";

export default {
  name: "Home",
  components: {
    ShopItem
  },
  props: ["shops"]
};
</script>

<style scoped>
</style>