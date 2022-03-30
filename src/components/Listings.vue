<template>
<div class="row">
    <div class="col-6 col-md-2 p-1" v-for="listing in listings" :key="listing.id" >
        <Listing :listing="listing" :showCart="showCart"/>
    </div>
</div>
</template>

<script>
import Listing from './Listing.vue'

export default {
    name:'Listings',
    props:{
        listings:Array,
        showCart:Boolean
    },
    components:{
        Listing
    },

}
</script>