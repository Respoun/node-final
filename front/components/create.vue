<template lang="html">
  <div class="create-products">
      <form class="w-50 mx-auto">
          <div class="form-group">
              <label>Name</label>
              <input class="form-control" type="text" v-model="name">
          </div>
          <div class="form-group">
              <label>Description</label>
              <input class="form-control" type="text" v-model="Description">
          </div>
          <div class="form-group">
              <label>startDate</label>
              <input class="form-control" type="date" v-model="startDate">
          </div>
          <div class="form-group">
              <label>endDate</label>
              <input class="form-control" type="number" v-model="endDate">
          </div>
          <div class="form-group">
              <label>money</label>
              <input class="form-control" type="text" v-model="money">
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
