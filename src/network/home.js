//该文件放置所有关于home的网络请求
import {request} from './request'

export function getHomeMultidata() {
  return  request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}