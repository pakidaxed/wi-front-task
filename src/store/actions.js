import axios from "axios";
import router from "@/router";

export default {

    saveToStore({commit}, userData) {
        commit('saveNewUser', userData)
        router.push('/')
    },
    /*
    Getting all data from API
     */
    async getCountries({commit}) {
        await axios
            .get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code') // HARD coded only for this task, should be elsewhere
            .then(response => {
                commit('setCountries', response.data)
            })
    },







}