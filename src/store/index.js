import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

// import http from '../../plugins/http'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products:[],
    cart:{
      productInCartIds: [1,2],
      productNumsById: {1:2,2:1}
    }
  },
  modules: {
   
  },
  mutations:{
    getCart(state,products){
        state.products = products
    }
  },
  actions: {
    // async getCart({commit}){
    //     const res = await http.get('/products')
    //     console.log(res.data)
    //     commit('getCart',res.data)
    // }
    async getCart({commit}){
      const res = await axios.get('http://localhost:3009/products')
      // console.log(res.data)
      commit('getCart', res.data)
    }
  },
  getters: {
      cartList(state){
        return state.cart.productInCartIds.reduce((res,id)=> {
          const currentProduct = state.products.find(product =>{
            return product.id === id
          })
          res.push({...currentProduct,num:state.cart.productNumsById[id]})
          return res
        },[])
      }
  }
})

// delete   /todos/:id
// 没返回


// post  '/todos'    {text, done}
// 返回新添加的 todo 

// patch  /todos/:id    {done: value}
// 返回修改后的 todo
export default store