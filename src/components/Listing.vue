<template>
  <div class="item-card">
    <div class="item-header position-relative">
      <p style="font-size: 0.8rem" class="p-0 m-0 text-muted">
        {{ listing.inventory.item.sub_type }} |
        {{ listing.inventory.item.exterior }}
      </p>
      <p style="color:#cbcbcb;">
        {{ listing.inventory.item.name }}
      </p>
      <span class="position-absolute top-0 end-0">
        <i
          class="fas fa-handshake text-success"
          v-if="listing.inventory.tradable"
        ></i>
        <i class="fas fa-handshake-slash text-primary" v-else></i>
      </span>
    </div>
    <div class="item-body">
      <p class="placeholder-glow" v-show="!image_loaded">
        <span
          class="placeholder col-12 bg-secondary"
          style="height: 144px"
        ></span>
      </p>
      <img
        :src="listing.inventory.item.icon"
        @load="this.image_loaded = true"
        v-show="image_loaded"
        class="img-fluid"
      />
    </div>
    <div class="item-footer" style="font-size: 0.8rem">
      <div class="mt-1">
        <FloatBar :float="listing.inventory.float" />
        <span class="text-muted text-center text-truncate">{{
          truncate_float()
        }}</span>
      </div>
      <p class="m-0 p-0 fs-6" style="color:#cbcbcb;">रू {{ listing.price }}</p>
      <span v-if="showCart">
        <button class="btn btn-danger" @click="removeFromCart" v-if="inCart">
          <i class="fas fa-cart-arrow-down"></i>
        </button>
        <button class="btn btn-success" @click="addToCart" v-else>
          <i class="fas fa-cart-plus"></i>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import FloatBar from "./FloatBar.vue";

export default {
  name: "Listing",
  inject: ["cartstate"],
  methods: {
    addToCart: function (event) {
      event.target.setAttribute("disabled", "");
      this.cartstate.addToCart(this.listing.id);
    },
    removeFromCart: function (event) {
      event.target.setAttribute("disabled", "");
      this.cartstate.removeFromCart(this.listing.id);
    },
    truncate_float() {
      var truncated_v = `${this.listing.inventory.float}`.substring(0, 6);
      return truncated_v;
    },
  },
  data() {
    return { image_loaded: false };
  },
  computed: {
    inCart: function () {
      return this.cartstate.state[this.listing.id];
    },
  },
  props: {
    listing: Object,
    showCart: { type: Boolean, default: false },
  },
  components: {
    FloatBar,
  },
};
</script>

<style scoped>
.item-footer {
  text-align: center;
}
</style>