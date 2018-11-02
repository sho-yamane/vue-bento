import Heading from './src/'

/* istanbul ignore next */
Heading.install = function(Vue) {
  Vue.component(Heading.name, Heading)
}

export default Heading
