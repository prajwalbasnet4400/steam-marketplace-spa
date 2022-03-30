<template>
  <div
    @click="toggle_item()"
    :class="{ selected: isSelected() }"
    class="item-card"
    :style="{ outline: '#' + item.item.rarity_color + ' 0.5px solid' }"
  >
    <div class="item-header position-relative">
      <p style="font-size: 0.8rem" class="p-0 m-0">
        {{ item.item.sub_type }} | {{ item.item.exterior }}
      </p>
      <p>
        {{ item.item.name }}
      </p>
      <span class="position-absolute top-0 end-0">
        <i class="fas fa-handshake text-success" v-if="item.tradable"></i>
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
        :src="item.item.icon"
        @load="this.image_loaded = true"
        v-show="image_loaded"
        class="img-fluid"
      />
    </div>
    <div class="item-footer" style="font-size: 0.8rem">
      <p>
        Float {{ item.float }} <br />
        PaintSeed {{ item.paintseed }} <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  inject:['pricingstate']
  ,
  data() {
    return { image_loaded: false };
  },
  props: {
    item: Object,
  },
  methods: {
    toggle_item:function(){
      if (this.isSelected()){
        this.deselect_item()
      }else{
        this.select_item()
      }
    }
    ,
    select_item: function () {
      this.pricingstate.state[this.item.id] = this.item
    },
    isSelected: function () {
      return this.pricingstate.state[this.item.id];
    },
    deselect_item:function(){
      delete this.pricingstate.state[this.item.id]
    }
  },
};
</script>

<style scoped>
.selected {
  background-color: var(--my-primary);
  transition: 50ms;
}
</style>