const path = require('path')

const { getDirPathnames } = require('./file')

const isCompoentsDir = pathname => {
  const tailDir = pathname.split('/').pop()
  if (tailDir === 'src') {
    // src dir
    return false
  }
  if (['atoms', 'molecules'].includes(tailDir)) {
    // Atmic Design types dir
    return false
  }
  return true
}

const buildComponentMetaDatum = componentDir => {
  const componentsDir = getDirPathnames(componentDir).filter(isCompoentsDir)
  return componentsDir.map(dirPathname => {
    const names = dirPathname.split('/')
    const name = names.pop()
    const typeName = names.pop()
    return {
      name,
      typeName,
      indexPathname: dirPathname,
      srcPathname: path.join(dirPathname, 'src')
    }
  })
}

module.exports = {
  buildComponentMetaDatum
}
