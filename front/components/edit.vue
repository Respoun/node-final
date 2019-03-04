<template lang="html">

    <form >
        <input type="text" v-model="name">
        <button type="button" name="button" v-on:click="formData(name)">editer</button>
    </form>

</template>

<script>
import ProductsService from '../services/ProductsService.vue'

export default {
  data () {
    return {
      user: [],
      name: '',
      description: '',
      price: '',
      tva: ''
    }
  },
  created () {
    let paramsId = this.$route.params.id
    ProductsService.getProduct(paramsId)
  },
  methods: {
    formData: function (name) {
      ProductsService.editProduct(name)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
