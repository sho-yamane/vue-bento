// style ブロックでの自動読み込み
const autoImportSass = `
@import "moftone/src/scss/tone/_moftone.scss";
@import "sass-dashi/src/scss/_dashi.scss";
@import "musubii/src/scss/config/_variable.scss";
`

module.exports = {
  css: {
    extract: true, // CSS をコンポーネントごとに持たせる場合は false
    loaderOptions: {
      sass: {
        data: autoImportSass
      }
    }
  }
}
