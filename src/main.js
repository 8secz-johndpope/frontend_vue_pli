import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About";
import Account from "./components/Account.vue";
import Products from "./components/Products";
import ProductsView from "./components/ProductsView";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/account",
        component: Account
    },
    {
        path: "/shops/:shopId",
        component: Products
    },
    // {
    //     path: "/products",
    //     component: Products
    // },
    {
        path: "/shops/:shopId/products/:productId",
        component: ProductsView
    }
];
const router = new VueRouter({
    routes
});
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
