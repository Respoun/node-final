<template lang="html">
  <div class="create-products">
      <form class="w-50 mx-auto">
          <div class="form-group">
              <label>Name</label>
              <input class="form-control" type="text" v-model="name">
          </div>
          <div class="form-group">
              <label>Surname</label>
              <input class="form-control" type="text" v-model="surname">
          </div>
          <div class="form-group">
              <label>Username</label>
              <input class="form-control" type="text" v-model="username">
          </div>
          <div class="form-group">
              <label>birthday</label>
              <input class="form-control" type="number" v-model="birthday">
          </div>
          <div class="form-group">
              <label>address</label>
              <input class="form-control" type="text" v-model="address">
          </div>
          <div class="form-group">
              <label>Number</label>
              <input class="form-control" type="number" v-model="number">
          </div>
          <div class="form-group">
              <label>mail</label>
              <input class="form-control" type="number" v-model="mail">
          </div>
          <div class="form-group">
              <label>Job</label>
              <input class="form-control" type="texte" v-model="job">
          </div>
          <button class="btn btn-primary" type="button" name="button" v-on:click="formData(name, surname, username, birthday, address, number, mail, job)">Créer</button>
      </form>
  </div>
</template>

<script>

import ProductsService from '../services/service.vue'

export default {
  data () {
    return {
      name: '',
      surname: '',
      username: '',
      birthday: '',
      address: '',
      number: '',
      mail: '',
      job: '',
      isVisible: false
    }
  },
  methods: {
    formData: function (name, surname, username, birthday, address, number, mail, job) {
      ProductsService.createProduct(name, surname, username, birthday, address, number, mail, job)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
