import { reactive } from "vue";
import API from "../api/API"

const state = reactive({})

const create_listings = () => {
    var data = Object.values(state);
    return API.createListings(data);
}

export default { state,create_listings }