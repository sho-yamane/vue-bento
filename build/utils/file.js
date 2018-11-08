const fs = require('fs')
const path = require('path')

const getDirPathnames = dirPathname => {
  const pathnames = fs.readdirSync(dirPathname)
  return pathnames.reduce((newPathnames, pathname) => {
    const absoluteFilePath = path.join(dirPathname, pathname)
    if (fs.statSync(absoluteFilePath).isDirectory()) {
      newPathnames.push(absoluteFilePath)
      return newPathnames.concat(getDirPathnames(absoluteFilePath))
    } else {
      return newPathnames
    }
  }, [])
}

const getFilePathnames = dirPathname => {
  const pathnames = fs.readdirSync(dirPathname)
  return pathnames.reduce((newPathnames, pathname) => {
    const absoluteFilePath = path.join(dirPathname, pathname)
    if (fs.statSync(absoluteFilePath).isDirectory()) {
      return newPathnames.concat(getFilePathnames(absoluteFilePath))
    } else {
      return newPathnames.concat(absoluteFilePath)
    }
  }, [])
}

const extractFileName = pathname => {
  return pathname.split('/').pop()
}

const readFile = path => {
  return fs.readFileSync(path, { encoding: 'utf8' })
}

const writeFile = (pathname, data) => {
  return fs.writeFileSync(pathname, data, { encoding: 'utf8' })
}

module.exports = {
  getDirPathnames,
  getFilePathnames,
  extractFileName,
  readFile,
  writeFile
}
