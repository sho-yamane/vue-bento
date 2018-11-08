const path = require('path')
const _ = require('lodash')
const consola = require('consola')

const {
  getFilePathnames,
  extractFileName,
  readFile,
  writeFile
} = require('./../utils/file')
const { buildComponentMetaDatum } = require('./../utils/src-reader')

/** paths */
const ROOT = path.resolve(__dirname, '..', '..')
const SRC_ROOT = path.join(ROOT, 'src')
const COMPONENTS_ROOT = path.join(SRC_ROOT, 'components')
const TEMPLATE_PATH = path.resolve(__dirname, 'index.template.js')

/** template */
const INDEX_JS_TEMPLATE = readFile(TEMPLATE_PATH)

/** functions */
const isVueComponent = filename => {
  return /\.vue$/.test(filename)
}

const readComponentNames = componentMetaData => {
  const components = getFilePathnames(componentMetaData.srcPathname)
    .map(extractFileName)
    .filter(isVueComponent)
  return {
    ...componentMetaData,
    components
  }
}

const createIndex = componentDatum => {
  const { name, components, indexPathname } = componentDatum
  const componentData = components.map(component => ({
    name: component.split('.').shift(),
    filename: component
  }))
  const compiled = _.template(INDEX_JS_TEMPLATE)
  const indexjsData = compiled({
    name,
    components: componentData
  })
  const indexjsPathname = path.join(indexPathname, 'index.js')
  writeFile(indexjsPathname, indexjsData)
  consola.success('Created:', indexjsPathname.replace(ROOT, ''))
}

/** main process */
consola.info('Start creating the component index.js')
buildComponentMetaDatum(COMPONENTS_ROOT)
  .map(readComponentNames)
  .map(createIndex)
