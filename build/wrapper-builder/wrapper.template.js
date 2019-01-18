<% _.each(components, (component) => { %>
export * from './components/<%= component.typeName %>/<%= component.name %>'<% }) %>
