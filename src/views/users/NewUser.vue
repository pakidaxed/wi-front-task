<template>
  <h1>NEW USER</h1>
  <user-form :countries="countries"></user-form>

</template>
<script>
import UserForm from "@/components/users/UserForm";
export default {
  components: {UserForm},
  data() {
    return {
      countries: [],
    }
  },
  async beforeMount() {
    await this.$store.dispatch('getCountries')
    this.countries = this.$store.getters.getCountries
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
