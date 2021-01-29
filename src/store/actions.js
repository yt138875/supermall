import { ADD_COUNTED, ADD_TO_CART } from './mutation-types'


export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //判断新增加的商品是否在购物车中已经有了 
      //find函数如果找到则会返回查找的值，否则，它返回undefined
      let oldProduct = context.state.cartList.find(item => item.id === payload.id)
      //判断是否已经有该商品了，如果已经有的话，将原来商品的counted属性+1，如果没有的话给商品添加一个counted属性并赋值1
      if (oldProduct) {
        // oldProduct.counted += 1
        context.commit(ADD_COUNTED, oldProduct)
        resolve('商品数量+1')
      }else{
        payload.counted = 1
        context.commit(ADD_TO_CART, payload)
        resolve('商品添加成功')
      }
    })
  }
}