import Default from './src/Default.vue'
import Soft from './src/Soft.vue'
import Vw from './src/Vw.vue'

export { default as VbInnerDefault } from './src/Default.vue'
export { default as VbInnerSoft } from './src/Soft.vue'
export { default as VbInnerVw } from './src/Vw.vue'

const components = [Default, Soft, Vw]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }
