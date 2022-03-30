<template>
  <td>
    <img
      :src="item.item.icon"
      class="img-fluid"
      style="max-width: 150px"
    />
  </td>
  <td>{{ item.item.market_hash_name }}</td>
  <td>{{ item.float }}</td>
  <td>
    <input
      type="number"
      name="price"
      class="form-control"
      v-model="item.price"
    />
  </td>
</template>

<script>
export default {
  name: "PricingItem",
  props: {
    item: Object,
  },
  created(){
    this.item.inventory = this.item.id
  }
};
</script>