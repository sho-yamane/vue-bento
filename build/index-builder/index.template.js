<% _.each(components, (component) => { %>
import <%= component.name %> from './src/<%= component.filename %>'<% }) %>
<% _.each(components, (component) => { %>
export { default as Vb<%= name %><%= component.name %> } from './src/<%= component.filename %>'<% }) %>

const components = [
  <% _.each(components, (component) => { %>
    <%= component.name %>,<% }) %>
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }
