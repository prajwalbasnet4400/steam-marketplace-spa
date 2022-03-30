<template>
  <div class="container">
    <h3 class="display-6">Your Cart:</h3>
    <div class="row">
      <div
        class="col-6 col-md-2"
        v-for="listing in Object.values(this.cartstate.state)"
        :key="listing.id"
      >
        <Listing :listing="listing.listing" :showCart="false" />
      </div>
    </div>
  </div>
</template>

<script>
import Listing from "../components/Listing";

export default {
  name: "Cart",
  created() {},
  components: {
    Listing,
  },
  inject: ["cartstate"],
};
</script>