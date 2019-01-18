import './scss/style.scss' // 別ファイルにするときはコメントアウトして build:style コマンドでビルドする

export * from './wrapper'
import * as components from './wrapper'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Object.keys(components).forEach(componentName => {
    const component = components[componentName]
    Vue.component(component.name, component)
  })
}

const plugin = { install }

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin
