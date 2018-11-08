import Danger from './src/Danger.vue'
import Default from './src/Default.vue'
import Disable from './src/Disable.vue'
import Primary from './src/Primary.vue'
import Success from './src/Success.vue'

export const components = [Danger, Default, Disable, Primary, Success]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }
