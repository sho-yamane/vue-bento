import Heading from './src/main'

/* istanbul ignore next */
Heading.install = function(Vue) {
  Vue.component(Heading.name, Heading)
}

export default Heading
