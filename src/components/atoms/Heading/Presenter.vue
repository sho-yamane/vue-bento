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
    },
    weight: {
      type: Number,
      default: null
    },
    italic: {
      type: Boolean,
      default: false
    },
    delete: {
      type: Boolean,
      default: false
    },
    capitalize: {
      type: Boolean,
      default: false
    },
    lowercase: {
      type: Boolean,
      default: false
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    justify: {
      type: Boolean,
      default: false
    },
    baseline: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    middle: {
      type: Boolean,
      default: false
    },
    bottom: {
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

      if (this.weight) {
        className.push(`is-weight-${this.weight}`)
      }

      if (this.italic) {
        className.push('is-italic')
      }

      if (this.delete) {
        className.push('is-delete')
      }

      if (this.capitalize) {
        className.push('is-capitalize')
      }

      if (this.lowercase) {
        className.push('is-lowercase')
      }

      if (this.uppercase) {
        className.push('is-uppercase')
      }

      if (this.left) {
        className.push('is-left')
      }

      if (this.center) {
        className.push('is-center')
      }

      if (this.right) {
        className.push('is-right')
      }

      if (this.justify) {
        className.push('is-justify')
      }

      if (this.baseline) {
        className.push('is-baseline')
      }

      if (this.top) {
        className.push('is-top')
      }

      if (this.middle) {
        className.push('is-middle')
      }

      if (this.bottom) {
        className.push('is-bottom')
      }

      if (this.nowrap) {
        className.push('is-nowrap')
      }

      if (this.break) {
        className.push('is-break')
      }

      if (this.size) {
        className.push(`is-${this.size}`)
      }

      return className
    }
  }
}
</script>
