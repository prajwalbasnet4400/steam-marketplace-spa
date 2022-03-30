import axios from "axios";

const endpoints = {
    user: "/user/users/my_user/",
    listings: { all: "/listing/" },
    inventory: { all: "/inventory/my_inventory/", update: "/inventory/update_inventory/" },
    steamcallback: "/user/steam_callback/",
    cart: { all: "/cart/", delete: "/cart/" }
}

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

export default {
    axios
    ,
    endpoints
    ,
    getListings(params) {
        return axios.get(endpoints.listings.all,{params:params});
    },
    createListings(data){
        return axios.post(endpoints.listings.all,data);
    }
    ,
    get_inventory() {
        return axios.get(endpoints.inventory.all);
    },
    update_inventory() {
        return axios.get(endpoints.inventory.update);
    },
    get_cart() {
        return axios.get(endpoints.cart.all);
    },
    post_cart(id) {
        var data = { 'listing': id }
        return axios.post(endpoints.cart.all, data);
    },
    delete_cart(id) {
        return axios.delete(endpoints.cart.delete + id + '/');
    }
    ,
    get_user() {
        return axios.get(endpoints.user);
    }
}