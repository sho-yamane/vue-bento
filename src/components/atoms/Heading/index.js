import Danger from './src/Danger.vue'
import Dark from './src/Dark.vue'
import Dark1 from './src/Dark1.vue'
import Dark2 from './src/Dark2.vue'
import Dark3 from './src/Dark3.vue'
import Dark4 from './src/Dark4.vue'
import Dark5 from './src/Dark5.vue'
import Dark6 from './src/Dark6.vue'
import Dark7 from './src/Dark7.vue'
import Dark8 from './src/Dark8.vue'
import Dark9 from './src/Dark9.vue'
import Default from './src/Default.vue'
import Info from './src/Info.vue'
import Light from './src/Light.vue'
import Light1 from './src/Light1.vue'
import Light2 from './src/Light2.vue'
import Light3 from './src/Light3.vue'
import Light4 from './src/Light4.vue'
import Light5 from './src/Light5.vue'
import Light6 from './src/Light6.vue'
import Light7 from './src/Light7.vue'
import Light8 from './src/Light8.vue'
import Light9 from './src/Light9.vue'
import Primary from './src/Primary.vue'
import Success from './src/Success.vue'
import Warning from './src/Warning.vue'

export { default as VbHeadingDanger } from './src/Danger.vue'
export { default as VbHeadingDark } from './src/Dark.vue'
export { default as VbHeadingDark1 } from './src/Dark1.vue'
export { default as VbHeadingDark2 } from './src/Dark2.vue'
export { default as VbHeadingDark3 } from './src/Dark3.vue'
export { default as VbHeadingDark4 } from './src/Dark4.vue'
export { default as VbHeadingDark5 } from './src/Dark5.vue'
export { default as VbHeadingDark6 } from './src/Dark6.vue'
export { default as VbHeadingDark7 } from './src/Dark7.vue'
export { default as VbHeadingDark8 } from './src/Dark8.vue'
export { default as VbHeadingDark9 } from './src/Dark9.vue'
export { default as VbHeadingDefault } from './src/Default.vue'
export { default as VbHeadingInfo } from './src/Info.vue'
export { default as VbHeadingLight } from './src/Light.vue'
export { default as VbHeadingLight1 } from './src/Light1.vue'
export { default as VbHeadingLight2 } from './src/Light2.vue'
export { default as VbHeadingLight3 } from './src/Light3.vue'
export { default as VbHeadingLight4 } from './src/Light4.vue'
export { default as VbHeadingLight5 } from './src/Light5.vue'
export { default as VbHeadingLight6 } from './src/Light6.vue'
export { default as VbHeadingLight7 } from './src/Light7.vue'
export { default as VbHeadingLight8 } from './src/Light8.vue'
export { default as VbHeadingLight9 } from './src/Light9.vue'
export { default as VbHeadingPrimary } from './src/Primary.vue'
export { default as VbHeadingSuccess } from './src/Success.vue'
export { default as VbHeadingWarning } from './src/Warning.vue'

const components = [
  Danger,
  Dark,
  Dark1,
  Dark2,
  Dark3,
  Dark4,
  Dark5,
  Dark6,
  Dark7,
  Dark8,
  Dark9,
  Default,
  Info,
  Light,
  Light1,
  Light2,
  Light3,
  Light4,
  Light5,
  Light6,
  Light7,
  Light8,
  Light9,
  Primary,
  Success,
  Warning
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }
