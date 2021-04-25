export default {
    setCurrentUser(state, data) {
        state.currentUser = data
    },

    setAllUsers(state, users) {
        state.allUsers = users ?? []
    },

    saveNewUser(state, user) {
        state.allUsers.push(user)
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