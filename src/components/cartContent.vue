<template>
    <div class="product">
        <h3>products</h3>
        <ul v-if="products.length">
            <cartItem v-for="product in products" :key="product.id" v-bind="product" />
        </ul>
    </div>
</template>

<script>
import cartItem from './cartItem.vue'
import { mapActions, mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['products'])
    },
    components: { cartItem },
    methods: {
        ...mapActions(['getCart'])
    },
    created() {
        this.getCart()
    }



}
</script>

<style>

</style>