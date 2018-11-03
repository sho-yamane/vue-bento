<script>
export default {
  name: 'Presenter',
  props: {
    line: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['line', 'outline', 'border'].includes(val)
      }
    },
    align: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['left', 'center', 'right', 'middle'].includes(val)
      }
    },
    stripe: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    className() {
      const className = []

      className.push('table')

      if (this.line) {
        className.push(`is-${this.line}`)
      }

      if (this.align) {
        className.push(`is-${this.align}`)
      }

      if (this.stripe) {
        className.push('is-stripe')
      }

      return className
    }
  }
}
</script>
