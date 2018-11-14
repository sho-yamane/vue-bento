<script>
export default {
  name: 'Presenter',
  props: {
    paint: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['paint', 'spot', 'danger'].includes(val)
      }
    },
    horizontal: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['left', 'center', 'right'].includes(val)
      }
    },
    vertical: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['middle'].includes(val)
      }
    }
  },
  computed: {
    className() {
      const className = []

      if (this.paint) {
        className.push(`is-${this.paint}`)
      }

      if (this.horizontal) {
        className.push(`is-${this.horizontal}`)
      }

      if (this.vertical) {
        className.push(`is-${this.vertical}`)
      }

      return className
    }
  }
}
</script>
