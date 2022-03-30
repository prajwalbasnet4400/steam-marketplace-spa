<template>
  <div class="container">
    <input
      type="text"
      class="p-1"
      style="width: 200px"
      placeholder="Name | Exterior | weapon"
      v-model="search_name"
    />
    <input type="number" placeholder="price_lte" v-model="price_lte">
    <input type="number" placeholder="price_gte" v-model="price_gte">
    <button class="btn btn-primary btn-sm ms-1" @click="search">
      <i class="fas fa-search"></i>
    </button>

    <button v-if="listings && listings.previous" @click="previous_page">
      &lt
    </button>

    <button v-if="listings && listings.next" @click="next_page">
      >
    </button>
    <Listings :listings="listings.results" v-if="listings" :showCart="false"/>
  </div>
</template>

<script>
// import axios from "axios";
import API from "../api/API";
import Listings from "../components/Listings";

export default {
  name: "Buy",
  data() {
    return { listings: null,search_name:'',price_gte:'',price_lte:''};
  },
  methods: {
    next_page(event){
      var btn = event.target;
      btn.setAttribute('disabled','');
      let self = this;
      var params = JSON.parse(JSON.stringify(this.$route.query))
      if (params.page){
        params.page = Number(params.page) + 1;

      }else{
        params.page = 2
      }
      this.$router.push({ query: params }).then(function(){
        self.get_listings();
        btn.removeAttribute('disabled');
      });

    },
    previous_page(event){
      var btn = event.target;
      btn.setAttribute('disabled','');
      let self = this;
      var params = JSON.parse(JSON.stringify(this.$route.query))
      if (params.page && Number(params.page)>=2){
        params.page = Number(params.page) - 1;

      }else{
        params.page = 1
      }
      this.$router.push({ query: params }).then(function(){
        self.get_listings();
        btn.removeAttribute('disabled');
      });

    }
    ,
    search(event) {
      var btn = event.target;
      btn.setAttribute('disabled','');
      let self = this;
      var params = { name: this.search_name,price__gte:this.price_gte,price__lte:this.price_lte };
      this.$router.push({ query: params }).then(function(){
        self.get_listings();
        btn.removeAttribute('disabled');
      });
    },
    get_listings() {
      let self = this;
      API.getListings(this.$route.query).then(function (response) {
        self.listings = response.data;
      });
    },
  },
  created() {
    this.get_listings();
  },
  components: {
    Listings,
  },
};
</script>