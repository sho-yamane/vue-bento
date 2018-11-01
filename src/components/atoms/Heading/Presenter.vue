<template>
  <component
    :is="tag"
    class="className"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'Presenter',
  computed: {
    formattedLevel() {
      return Math.max(1, Math.min(6, this.level))
    },
    formattedViewLevel() {
      const level =
        typeof this.visualLevel !== 'undefined'
          ? this.visualLevel
          : this.formattedLevel
      return Math.max(1, Math.min(6, level))
    },
    tag() {
      return `h${this.formattedLevel}`
    },
    className() {
      let className = []
      className.push(`_h${this.formattedViewLevel}`)
      if (this.weight === '700') {
        className.push('_fw700')
      }
      className = this.$_pushClassDarkMode(className)
      return className
    }
  }
}
</script>
