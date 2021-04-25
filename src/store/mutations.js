export default {
    setCurrentUser(state, id) {
        state.currentUser = state.allUsers.find(x => x.id === id)
    },

    unsetCurrentUser(state) {
        state.currentUser = null
    },

    deleteUser(state, id) {
        state.allUsers = state.allUsers.filter(x => x.id !== id)
    },

    saveNewUser(state, user) {
        state.allUsers.unshift(user)
    },

    setCountries(state, countries) {
        state.allCountries = countries
    }
}