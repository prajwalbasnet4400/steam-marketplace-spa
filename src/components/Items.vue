<template>
  <br />
  <div class="row">
    <div class="col-4 col-md-2 p-1" v-for="item in inventory" :key="item.id">
      <Item :item="item" />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "Items",
  props: {
    inventory: Array,
  },
  components: {
    Item,
  },
};
</script>