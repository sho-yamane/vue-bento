<script>
export default {
  name: 'Presenter',
  props: {
    color: {
      type: String,
      required: false,
      default: null,
      validator(val) {
        return ['primary', 'info', 'success', 'warning', 'danger'].includes(val)
      }
    }
  },
  computed: {
    className() {
      const className = []

      className.push('alert')

      if (this.color) {
        className.push(`is-${this.color}`)
      }

      return className
    }
  }
}
</script>
