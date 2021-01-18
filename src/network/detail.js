//引入网络请求的函数 
import {request} from './request'

//发送获取Detail数据网络请求
export function getDetail(id) {
  return request({
    url: '/detail',
    params: {
      iid: id
    }
  }) 
}
//发送获取Detail中推荐数据的网络请求
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

//商品详细信息
export class Goods{
  constructor(itemInfo,columns,services) { 
    this.title= itemInfo.title
    this.desc = itemInfo.desc
    this.discount = itemInfo.discountDesc
    this.oldPrice = itemInfo.oldPrice
    this.newPrice = itemInfo.price
    this.realPrice = itemInfo.lowNowPrice
    this.services = services
    this.columns = columns
  }
}
//商家信息
export class Shop{
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.score = shopInfo.score
    this.shopLogo = shopInfo.shopLogo
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.goodsCount = shopInfo.cGoods
  }
}

//商品尺码信息
export class GoodsSize{
  constructor(info,rule){
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set
    this.sizes = rule.tables
  }
}