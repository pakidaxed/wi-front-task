import axios from "axios";

export default {

    /*
    Getting all data from API
     */
    async getCountries() {
        await axios
            .get('https://restcountries.eu/rest/v2/all') // HARD coded only for this task, should be elsewhere
            .then(response => {
                console.log(response)
            })
    },







}