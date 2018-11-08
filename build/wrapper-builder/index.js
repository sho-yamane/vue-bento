const path = require('path')
const _ = require('lodash')
const consola = require('consola')

const { readFile, writeFile } = require('./../utils/file')
const { buildComponentMetaDatum } = require('./../utils/src-reader')

/** paths */
const ROOT = path.resolve(__dirname, '..', '..')
const SRC_ROOT = path.join(ROOT, 'src')
const COMPONENTS_ROOT = path.join(SRC_ROOT, 'components')
const TEMPLATE_PATH = path.resolve(__dirname, 'wrapper.template.js')

/** template */
const INDEX_JS_TEMPLATE = readFile(TEMPLATE_PATH)

/** functions */
const createIndex = components => {
  const compiled = _.template(INDEX_JS_TEMPLATE)
  const indexjsData = compiled({
    components
  })
  const wrapperPathname = path.join(SRC_ROOT, 'wrapper.js')
  writeFile(wrapperPathname, indexjsData)
  consola.success('Created:', wrapperPathname.replace(ROOT, ''))
}

/** main process */
consola.info('Start creating the wrapper.js')
const datum = buildComponentMetaDatum(COMPONENTS_ROOT)
createIndex(datum)
