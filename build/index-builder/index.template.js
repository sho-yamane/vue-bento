<% _.each(components, (component) => { %>
import <%= component.name %> from './src/<%= component.filename %>'<% }) %>

export const components = [
  <% _.each(components, (component) => { %>
    <%= component.name %>,<% }) %>
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }
