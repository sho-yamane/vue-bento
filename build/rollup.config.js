import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import scss from 'rollup-plugin-scss'

export default {
  entry: 'entry.js',
  input: 'src/wrapper.js',
  output: {
    name: 'Musubii',
    exports: 'named'
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    buble(),
    scss()
  ]
}
