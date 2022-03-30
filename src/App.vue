<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg p-0">
      <div class="container-fluid">
        <div>
          <router-link class="nav-link" to="/">
            <img
              src="https://media.discordapp.net/attachments/608252322174337055/891256547030753300/afafaged.png"
              style="width: 200px"
            />
          </router-link>
          <a
            class="d-inline d-md-none btn btn-sm text-white"
            data-bs-toggle="offcanvas"
            href="#offCanvasNav"
            role="button"
            style="font-size: 1.5rem"
            aria-controls="offCanvasNav"
          >
            <i class="fas fa-bars"></i>
          </a>
        </div>
        <div class="d-none d-md-block text-uppercase me-auto">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/buy">Buy</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sell">Sell</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">Cart</router-link>
            </li>
          </ul>
        </div>
        <div>
          <LoggedInBtn v-if="authenticated" :user="user" />
          <LoginBtn v-else />
        </div>
      </div>
    </nav>
  </div>
  <Cart v-if="authenticated" />
  <router-view />
</template>

<script>
import axios from "axios";
import LoginBtn from "./components/LoginBtn.vue";
import LoggedInBtn from "./components/LoggedInBtn.vue";
import Cart from "./components/Cart.vue";
import CartStore from "./store/CartStore";
import API from "./api/API";
import PricingStore from './store/PricingStore';

export default {
  name: "App",
  components: {
    LoginBtn,
    LoggedInBtn,
    Cart,
  },
  data() {
    return {
      user: null,
      authenticated: false,
    };
  },
  provide() {
    return {
      cartstate: CartStore,
      pricingstate:PricingStore
    };
  },
  created() {
    axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
    this.set_authentication();
  },
  methods: {
    set_authentication: function () {
      let self = this;
      var auth_token = Cookies.get("_Token", undefined);
      if (auth_token != undefined) {
        axios.defaults.headers.common["Authorization"] = `Token ${auth_token}`;
        API.get_user().then(function (response) {
          self.user = response.data;
          if (response.status == 200) {
            self.authenticated = true;
            return true;
          } else {
            self.authenticated = false;
            Cookies.remove("_Token", { path: "/" });
            return false;
          }
        });
      } else {
        this.authenticated = false;
        return false;
      }
    },
    set_user: function () {
      let self = this;
      API.get_user()
        .then(function (response) {
          self.user = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
