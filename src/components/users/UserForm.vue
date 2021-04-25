<template>
  <h1>USER FORM</h1>
  <div class="errors" v-if="errors.length > 0">
    <div class="alert-danger p-3 mb-3">
      <p v-for="error in errors" :key="error.id">{{ error }}</p>
    </div>
  </div>
  <form @submit.prevent="saveNewUser">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" v-model.trim="newUser.firstName">
      </div>
      <div class="form-group col-md-6">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" v-model.trim="newUser.lastName">
      </div>
    </div>
    <div class="form-group">
      <label for="country">Country</label>
      <select name="country" id="country" class="form-control" v-model.trim="newUser.country">
        <!--        alpha3Code should be used for real project instead of name for saving-->
        <option :value="country.name" v-for="country in countries" :key="country.id">{{ country.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" class="form-control" id="address" v-model.trim="newUser.address">
    </div>

    <button type="submit" class="btn btn-primary">Add new user</button>
  </form>
</template>

<script>
export default {
  props: ['countries'],
  data() {
    return {
      newUser: {
        id: null,
        firstName: null,
        lastName: null,
        country: null,
        address: null
      },
      errors: []
    }
  },
  methods: {
    saveNewUser() {
      this.errors = []
      this.newUser.id = new Date().toISOString()

      // Validating first name
      if (this.newUser.firstName === null) this.errors.push('Please enter your first name')
      // other validators...

      // Validating last name
      if (this.newUser.lastName === null) this.errors.push('Please enter your last name')

      // Validating country
      if (this.newUser.country === null) this.errors.push('Please select country')

      // Validating address
      if (this.newUser.address === null) this.errors.push('Please enter your address')

      if (this.errors.length <= 0) this.$store.dispatch('saveToStore', this.newUser)
    }
  }
}
</script>

<style scoped>

</style>