import axios from "axios";

export default {

    /*
    Getting all data from API
     */
    async getCountries({commit}) {
        await axios
            .get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code') // HARD coded only for this task, should be elsewhere
            .then(response => {
                console.log(response.data)
                commit('setCountries', response.data)
            })
    },







}