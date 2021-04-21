export default {
    setCurrentUser(state, data) {
        state.currentUser = data
    },

    setAllUsers(state, users) {
        state.allUsers = users ?? []
    },

    resetErrors(state) {
        state.errors = null
    },

    setErrors(state, errors) {
        state.errors = errors
    },

    setCountries(state, countries) {
        state.allCountries = countries
    }
}