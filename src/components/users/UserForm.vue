<template>
  <h1 v-if="currentUser">Edit user</h1>
  <h1 v-else>Add new user <span><button class="btn-sm btn-warning" @click="$router.push('/')">Back to list</button></span></h1>
  <div class="errors" v-if="errors.length > 0">
    <div class="alert-danger p-3 mb-3">
      <p v-for="error in errors" :key="error.id">{{ error }}</p>
    </div>
  </div>
  <form @submit.prevent>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" v-model.trim="user.firstName">
      </div>
      <div class="form-group col-md-6">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" v-model.trim="user.lastName">
      </div>
    </div>
    <div class="form-group">
      <label for="country">Country</label>
      <select name="country" id="country" class="form-control" v-model.trim="user.country">
        <!--        alpha3Code should be used for real project instead of name for saving-->
        <option :value="country.name" v-for="country in countries" :key="country.id">{{ country.name }}</option>

      </select>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" class="form-control" id="address" v-model.trim="user.address">
    </div>

    <button class="btn btn-primary" v-if="currentUser" @click="updateUser">Update user info</button>
    <button class="btn btn-danger" v-if="currentUser" @click="deleteUser(user.id)">Delete user</button>
    <button class="btn btn-success" v-else @click="saveNewUser">Add new user</button>
  </form>
</template>

<script>
export default {
  props: ['countries', 'currentUser'],
  data() {
    return {
      user: {
        id: null,
        firstName: null,
        lastName: null,
        country: null,
        address: null
      },
      errors: []
    }
  },
  mounted() {
    setTimeout(this.setCurrentUser, 100)
  },
  beforeRouteLeave() {
    this.$store.dispatch('unsetCurrentUser')
    this.user = null
  },
  methods: {
    saveNewUser() {
      this.errors = []
      this.user.id = new Date().toISOString()

      this.validateUserInfo(this.user)

      if (this.errors.length <= 0) this.$store.dispatch('saveToStore', this.user)
    },
    updateUser() {
      this.$router.push('/')
    },
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id)
    },
    validateUserInfo(user) {
      // Validating first name
      if (user.firstName === null) this.errors.push('Please enter your first name')
      // other validators...

      // Validating last name
      if (user.lastName === null) this.errors.push('Please enter your last name')

      // Validating country
      if (user.country === null) this.errors.push('Please select country')

      // Validating address
      if (user.address === null) this.errors.push('Please enter your address')
    },
    setCurrentUser() {
      if (this.currentUser) this.user = this.currentUser
    }
  },

}
</script>

<style scoped>

</style>