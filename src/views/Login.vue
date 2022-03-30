<template>
  <h1 class="text-white">Redirecting, Please Wait</h1>
</template>

<script>
import API from "../api/API";
export default {
  name: "Login",
  created() {
    var self = this;
    const url = API.endpoints.steamcallback + window.location.search;
    API.axios
      .get(url)
      .then(function (response) {
        Cookies.set("_Token", response.data.token);
        self.$root.set_authentication();
        self.$router.push({ name: "Home" });
      })
      .catch(function (error) {});
  },
  components: {},
};
</script>