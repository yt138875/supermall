//引入网络请求的函数 
import {request} from './request'

//发送网络请求
//获取分类信息
export function getCategory() {
  return request({
    url: '/category'
  })
}
//获取分类中商品信息
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}