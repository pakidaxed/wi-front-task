import {createStore} from 'vuex'

import getters from '@/store/getters'
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export default createStore({
    state: {
        allUsers: [],
        currentUser: null,
        errors: null,
        allCountries: []
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
    // Could split the code into modules and use it with namespaces, but the project is not so big
    modules: {}
})
