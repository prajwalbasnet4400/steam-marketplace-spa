<template>
  <div class="cart">
    <button class="btn btn-secondary" v-if="cartstate.state">
      {{ cart_length }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  inject: ["cartstate"],
  computed: {
    cart_length: function () {
      return Object.keys(this.cartstate.state).length;
    },
  },
  created() {
    this.cartstate.getCart();
  },
};
</script>

<style scoped>
.cart {
  position: fixed;
  right: 0%;
  top: 30%;
}
</style>