<template>
  <div class="container">
    <div class="col-12 d-flex">
      <button class="btn btn-success me-auto" @click="update_inventory">
        Refresh Inventory
      </button>
    <router-link class="btn btn-success" to="/pricing">Proceed To Pricing</router-link>
    </div>
    <Items :inventory="inventory" />
  </div>
</template>

<script>
import API from "../api/API";
import Items from "../components/Items";

export default {
  name: "Sell",
  data() {
    return {
      inventory: null,
      selected: [],
    };
  },
  created() {
    this.get_inventory();
  },
  methods: {
    update_inventory: function (event) {
      // Disable the button
      event.target.setAttribute("disabled", "");
      let self = this;
      API.update_inventory()
        .then(function () {
          self.get_inventory();
        })
        .finally(function () {
          // Enable the button
          event.target.removeAttribute("disabled");
        });
    },
    get_inventory: function () {
      let self = this;
      API.get_inventory().then(function (response) {
        self.inventory = response.data;
      });
    },
  },
  components: {
    Items,
  },
};
</script>