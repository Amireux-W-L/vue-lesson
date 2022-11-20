<template>
  <div>
      <h3>Your Cart</h3>
      <ul v-if=" products.length && cartList.length ">
            <cart-item v-for="product in cartList" :key="product.id" v-bind="product"/>
        </ul>
        <span>Total:$ 100.01</span>
  </div>
</template>

<script>
import cartItem from './cartItem.vue'
import {mapGetters,mapState} from 'vuex'

export default {
  components: { cartItem },
  computed: {
     ...mapGetters(['cartList']),
     ...mapState(['products']),
    },
}
</script>

<style>

</style>