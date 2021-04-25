<template>
  <user-form :countries="countries" :current-user="currentUser"></user-form>
</template>

<script>
import UserForm from "@/components/users/UserForm";

export default {
  components: {UserForm},
  data() {
    return {
      countries: null,
      currentUser: null
    }
  },
  async beforeCreate() {
    await this.$store.dispatch('getCountries')
    this.countries = this.$store.getters.getCountries

    this.$store.dispatch('setCurrentUser', this.$route.params.id)
    this.currentUser = this.$store.getters.getCurrentUser
  },
}
</script>

<style scoped>

</style>