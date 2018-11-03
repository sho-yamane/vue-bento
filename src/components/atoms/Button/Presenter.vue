<script>
export default {
  name: 'Presenter',
  props: {
    decoration: {
      type: String,
      default: 'plain',
      required: false,
      validator(val) {
        return ['plain', 'melt', 'outline', 'ghost'].includes(val)
      }
    },
    floating: {
      type: Boolean,
      default: false,
      required: false
    },
    round: {
      type: Boolean,
      default: false,
      required: false
    },
    circle: {
      type: Boolean,
      default: false,
      required: false
    },
    size: {
      type: String,
      default: 'md',
      required: false,
      validator(val) {
        return ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(val)
      }
    }
  },
  computed: {
    className() {
      const className = []

      className.push('btn')

      if (this.decoration) {
        className.push(`is-${this.decoration}`)
      }

      if (this.floating) {
        className.push('is-floating')
      }

      if (this.round) {
        className.push('is-round')
      }

      if (this.circle) {
        className.push('is-circle')
      }

      if (this.size) {
        className.push(`is-${this.size}`)
      }

      return className
    }
  }
}
</script>
