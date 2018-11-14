import Default from './src/Default.vue'
import Soft from './src/Soft.vue'
import Vw from './src/Vw.vue'

export const components = [Default, Soft, Vw]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }
