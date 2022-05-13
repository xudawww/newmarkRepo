import { createStore } from 'vuex'
import ProdutcModule from './product/product.module.js'
import UserModule from './user/user.module'
export default createStore({
    modules: {
        product: ProdutcModule,
        user:UserModule
      }
})