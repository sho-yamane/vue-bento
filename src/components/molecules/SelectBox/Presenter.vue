<script>
export default {
  name: 'Presenter',
  props: {
    options: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    className() {
      const className = []

      className.push('select')

      if (this.multiple) {
        className.push('is-multiple')
      }

      return className
    },
    multipleSize() {
      if (this.multiple) {
        return this.options.length
      } else {
        return null
      }
    }
  }
}
</script>
