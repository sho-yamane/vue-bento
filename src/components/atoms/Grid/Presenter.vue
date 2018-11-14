<script>
export default {
  name: 'Presenter',
  props: {
    position: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return [
          'middle',
          'bottom',
          'center',
          'right',
          'between',
          'around'
        ].includes(val)
      }
    },
    stretch: {
      type: Boolean,
      default: false,
      required: false
    },
    reverse: {
      type: Boolean,
      default: false,
      required: false
    },
    gapNone: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    className() {
      const className = []

      className.push('grid')

      if (this.position) {
        className.push('is-position')
      }

      if (this.stretch) {
        className.push('is-stretch')
      }

      if (this.reverse) {
        className.push('is-reverse')
      }

      if (this.gapNone) {
        className.push(`is-gap-none`)
      }

      return className
    }
  }
}
</script>
