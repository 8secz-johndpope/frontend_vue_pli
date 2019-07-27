<template>
  <v-app>
    <NavBar
      class="navbar_"
      v-bind:storedName="storedName"
      v-bind:storedPass="storedPass"
      v-bind:storedJWT="storedJWT"
    />
    <v-content>
      <router-view
        v-on:authSuccess="refreshAuth"
        v-on:disconnectSuccess="refreshAuth"
        v-bind:storedName="storedName"
        v-bind:storedPass="storedPass"
        v-bind:storedJWT="storedJWT"
        v-bind:shops="shops"
        v-bind:products="products"
      ></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      storedName: "",
      storedPass: "",
      storedJWT: "",
      products: [
        {
          id: 0,
          name: "Courgettes",
          description: "Des courgettes bio et fraiches",
          descriptionProduit:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem est ex expedita facere harum, hic inventore itaque nobis obcaecati, odit recusandae reiciendis rem reprehenderit saepe vitae voluptatum. Cumque deleniti iste officiis quis quisquam quo repudiandae voluptatibus! Asperiores at atque ipsam possimus quasi sapiente, voluptate? Est quidem quis quos velit."
        },
        {
          id: 1,
          name: "Tomates",
          description: "Des tomates bio et fraiches",
          descriptionProduit:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem est ex expedita facere harum, hic inventore itaque nobis obcaecati, odit recusandae reiciendis rem reprehenderit saepe vitae voluptatum. Cumque deleniti iste officiis quis quisquam quo repudiandae voluptatibus! Asperiores at atque ipsam possimus quasi sapiente, voluptate? Est quidem quis quos velit."
        },
        {
          id: 2,
          name: "Concombres",
          description: "Des concombres bio et fraiches",
          descriptionProduit:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem est ex expedita facere harum, hic inventore itaque nobis obcaecati, odit recusandae reiciendis rem reprehenderit saepe vitae voluptatum. Cumque deleniti iste officiis quis quisquam quo repudiandae voluptatibus! Asperiores at atque ipsam possimus quasi sapiente, voluptate? Est quidem quis quos velit."
        },
        {
          id: 3,
          name: "Bananes",
          description: "Des bananes bio et fraiches",
          descriptionProduit:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem est ex expedita facere harum, hic inventore itaque nobis obcaecati, odit recusandae reiciendis rem reprehenderit saepe vitae voluptatum. Cumque deleniti iste officiis quis quisquam quo repudiandae voluptatibus! Asperiores at atque ipsam possimus quasi sapiente, voluptate? Est quidem quis quos velit."
        },
        {
          id: 4,
          name: "Poivrons",
          description: "Des poivron bio et fraiches",
          descriptionProduit:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem est ex expedita facere harum, hic inventore itaque nobis obcaecati, odit recusandae reiciendis rem reprehenderit saepe vitae voluptatum. Cumque deleniti iste officiis quis quisquam quo repudiandae voluptatibus! Asperiores at atque ipsam possimus quasi sapiente, voluptate? Est quidem quis quos velit."
        },
        {
          id: 5,
          name: "Carottes",
          description: "Des carottes bio et fraiches",
          descriptionProduit:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem est ex expedita facere harum, hic inventore itaque nobis obcaecati, odit recusandae reiciendis rem reprehenderit saepe vitae voluptatum. Cumque deleniti iste officiis quis quisquam quo repudiandae voluptatibus! Asperiores at atque ipsam possimus quasi sapiente, voluptate? Est quidem quis quos velit."
        },
        {
          id: 6,
          name: "Choux",
          description: "Des choux bio et fraiches",
          descriptionProduit:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem est ex expedita facere harum, hic inventore itaque nobis obcaecati, odit recusandae reiciendis rem reprehenderit saepe vitae voluptatum. Cumque deleniti iste officiis quis quisquam quo repudiandae voluptatibus! Asperiores at atque ipsam possimus quasi sapiente, voluptate? Est quidem quis quos velit."
        }
      ]
    };
  },
  computed: {
    shops: function() {
      return [
        {
          id: 0,
          name: "Shop 0",
          description: "the big shop of ...",
          products: this.products
        },
        {
          id: 1,
          name: "Shop 1",
          description: "the big shop of ...",
          products: this.products
        },
        {
          id: 2,
          name: "Shop 2",
          description: "the big shop of ...",
          products: this.products
        },
        {
          id: 3,
          name: "Shop 3",
          description: "the big shop of ...",
          products: this.products
        },
        {
          id: 4,
          name: "Shop 4",
          description: "the big shop of ...",
          products: this.products
        }
      ];
    }
  },
  created: function() {
    this.refreshAuth();
  },
  methods: {
    refreshAuth() {
      console.log("refreshed");
      this.storedName = localStorage.storedName;
      this.storedPass = localStorage.storedPass;
      this.storedJWT = localStorage.storedJWT;
    }
  }
};
</script>

<style>
.navbar_ {
  z-index: 5;
}

div.success {
  background: #55c1ff;
  text-align: center;
  border-radius: 3px;
  color: white;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}

div.failure {
  background: #ff5555;
  text-align: center;
  border-radius: 3px;
  color: white;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}

div.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(51, 51, 51, 0.3);
  display: flex;
  z-index: 10;
}

div.loading h1 {
  margin: auto;
  color: white;
}
</style>

