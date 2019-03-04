<template lang="html">
    <div class="product-list">
        <table class="table">
            <tr>
                <th>Nom du produit</th>
                <th>description</th>
                <th>Prix</th>
                <th>TVA</th>
            </tr>
            <tr v-for="product in products">
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.description}}</td>
                <td>{{product.tva}}</td>
            </tr>
        </table>

    </div>
</template>

<script>

import ProductsService from '../services/ProductsService'

export default {
  data () {
    return {
      products: []
    }
  },
  created () {
    ProductsService.getProducts()
      .then((data) => {
        this.products = data
      })
      .catch(error => { console.log(error) })
  }
}
</script>
