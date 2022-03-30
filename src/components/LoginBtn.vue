<template>
  <a class="btn btn-success" :href="steam_login_url"> Login With Steam </a>
</template>

<script>
export default {
  name: "LoginBtn",
  data() {
    return {
      steam_login_url: null,
    };
  },
  created() {
    this.steam_login_url = this.get_steam_login_url();
  },
  methods: {
    get_steam_login_url() {
      const return_to =
        window.location.origin + this.$router.resolve({ name: "Login" }).href;
      const url = new URL("https://steamcommunity.com/openid/login");
      const param = new URLSearchParams({
        "openid.ns": "http://specs.openid.net/auth/2.0",
        "openid.mode": "checkid_setup",
        "openid.return_to": return_to,
        "openid.realm": window.location.origin,
        "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
        "openid.claimed_id":
          "http://specs.openid.net/auth/2.0/identifier_select",
      });
      var steam_login_url = url.toString() + "?" + param.toString();
      return steam_login_url;
    },
  },
};
</script>