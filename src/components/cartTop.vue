<template>
  <div class="head">
      <h2>Shopping Cart</h2>
      <cart-content />
      <cartFoot />
  </div>
</template>

<script>
import CartContent from './cartContent.vue'
import cartFoot from './cartFoot.vue'
export default {
  components: { cartFoot, CartContent },

}
</script>

<style>

</style>