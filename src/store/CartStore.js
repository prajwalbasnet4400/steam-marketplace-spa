import { reactive } from "vue";
import API from "../api/API"

const state = reactive({})

const getCart = () => {
    API.get_cart().then(function (response) {
        for (var item of response.data) {
            state[item.listing.id] = item
        }
    })
};

const removeFromCart = (listing_id) => {
    var id = state[listing_id];
    API.delete_cart(id['id']).then(function (response) {
        delete state[listing_id];
    })

}

const addToCart = (id) => {
    API.post_cart(id).then(function (response) {
        getCart()
    })
}

export default { state: state, getCart: getCart, addToCart: addToCart, removeFromCart: removeFromCart }