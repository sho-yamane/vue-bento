<script>
export default {
  name: 'Presenter',
  props: {
    level: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: 'md'
    },
    strong: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formattedLevel() {
      return Math.max(1, Math.min(6, this.level))
    },
    tag() {
      return `h${this.formattedLevel}`
    },
    className() {
      let className = []

      className.push('heading')

      if (this.strong) {
        className.push('is-strong')
      }

      if (this.size) {
        className.push(`is-${this.size}`)
      }

      return className
    }
  }
}
</script>
