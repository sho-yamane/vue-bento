import Danger from './src/Danger.vue'
import Default from './src/Default.vue'
import Disable from './src/Disable.vue'
import Primary from './src/Primary.vue'
import Success from './src/Success.vue'

export { default as VbBtnDanger } from './src/Danger.vue'
export { default as VbBtnDefault } from './src/Default.vue'
export { default as VbBtnDisable } from './src/Disable.vue'
export { default as VbBtnPrimary } from './src/Primary.vue'
export { default as VbBtnSuccess } from './src/Success.vue'

const components = [Danger, Default, Disable, Primary, Success]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }
