<template>
  <div class="table-responsive">
    <table class="table table-dark table-hover table-extra">
      <thead>
        <tr>
          <th colspan="2">Item</th>
          <th>Float</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in pricingstate.state" :key="item.id">
          <PricingItem :item="item" />
        </tr>
      </tbody>
    </table>
    <button class="btn btn-success" @click="create_listings()">Create listings</button>
  </div>
</template>

<script>
import PricingItem from "../components/PricingItem.vue";

export default {
  name: "Pricing",
  components: {PricingItem},
  inject: ["pricingstate"],
  methods: {
    create_listings: function () {
      let self = this;
      this.pricingstate.create_listings().then(function(response){
        self.$router.push({name:'Buy'});
      })
    },
  },
};
</script>


<style scoped>
td {
  color: #cbcbcb;
  text-align: center;
  vertical-align: middle;
}
.table-extra {
  font-size: 0.9rem;
}
</style>