<template>
  <h1>All users
    <router-link to="/users/add">
      <button class="btn btn-success">Add new user</button>
    </router-link>
  </h1>
  <ul class="list-group">
    <li class="list-group-item list-group-item-action bg-light d-flex justify-content-between align-items-center">
      <div class="col-2 px-0">
        <span class="font-weight-bold text-decoration-none text-primary">First name</span>
      </div>
      <div class="col-2 px-0">
        <span class="font-weight-bold text-decoration-none text-primary">Last name</span>
      </div>
      <div class="col-3 px-0">
        <span class="font-weight-bold text-decoration-none text-primary">Country</span>
      </div>
      <div class="col-3 px-0">
        <span class="font-weight-bold text-decoration-none text-primary">Address</span>
      </div>
      <div class="col d-flex justify-content-end px-0">
        <span class="font-weight-bold text-decoration-none text-primary">Actions</span>
      </div>
    </li>

    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        v-for="user in users" :key="user.id">
      <div class="col-2 px-0">
        {{ user.firstName }}
      </div>
      <div class="col-2 px-0">
        {{ user.lastName }}
      </div>
      <div class="col-3 px-0">
        {{ user.country }}
      </div>
      <div class="col-3 px-0">
        {{ user.address }}
      </div>
      <div class="col d-flex justify-content-end px-0">
        <div class="actions d-flex">
          <button @click="$router.push('/users/' + user.id)" class="btn-sm btn-warning">Edit</button>
          <button class="btn-sm btn-danger" @click="deleteUser(user.id)">Delete</button>
        </div>
      </div>
    </li>
  </ul>

</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  beforeMount() {
    this.users = this.$store.getters.getAllUsers
  },
  methods: {
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id)
    }
  }
}
</script>