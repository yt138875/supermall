//使用Toast组件
import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2.创建组件(实例化组件)
  const toast = new toastConstructor()
  //3.创建一个挂载容器
  const div = document.createElement('div')
  //4.将组件挂载到容器上
  toast.$mount(div)
  //5.将组件添加入body中
  document.body.appendChild(toast.$el)

  //6.
  Vue.prototype.$toast = toast
}

export default obj