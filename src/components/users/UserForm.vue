<template>
  <h1>USER FORM</h1>
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName">
      </div>
      <div class="form-group col-md-6">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName">
      </div>
    </div>
    <div class="form-group">
      <label for="country">Country</label>
      <select name="country" id="country" class="form-control">
        <option :value="country.alpha3Code" v-for="country in countries" :key="country.id">{{ country.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" class="form-control" id="address">
    </div>

    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</template>

<script>
export default {
  props: ['countries']
}
</script>

<style scoped>

</style>