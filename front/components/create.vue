<template lang="html">
  <div class="create-products">
      <form class="w-50 mx-auto">
          <div class="form-group">
              <label>Name</label>
              <input class="form-control" type="text" v-model="name">
          </div>
          <div class="form-group">
              <label>description</label>
              <input class="form-control" type="text" v-model="description">
          </div>
          <div class="form-group">
              <label>price</label>
              <input class="form-control" type="number" v-model="price">
          </div>
          <div class="form-group">
              <label>TVA</label>
              <input class="form-control" type="number" v-model="tva">
          </div>
          <button class="btn btn-primary" type="button" name="button" v-on:click="formData(name, description, price, tva)">Créer</button>
      </form>
  </div>
</template>

<script>

import ProductsService from '../services/ProductsService.vue'

export default {
  data () {
    return {
      name: '',
      description: '',
      price: '',
      tva: '',
      isVisible: false
    }
  },
  methods: {
    formData: function (name, description, price, tva) {
      ProductsService.createProduct(name, description, price, tva)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
