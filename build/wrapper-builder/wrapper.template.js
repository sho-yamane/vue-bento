<% _.each(components, (component) => { %>
import { components as <%= component.name %>Components } from './components/<%= component.typeName %>/<%= component.name %>'<% }) %>

export const components = [
  <% _.each(components, (component) => { %>
    ...<%= component.name %>Components,<% }) %>
]
