<script>
export default {
  name: 'Presenter',
  props: {
    tag: {
      type: String,
      default: 'p',
      validator(val) {
        return ['div', 'p', 'span'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'md'
    },
    link: {
      type: Boolean,
      default: false,
      required: false
    },
    linkReverse: {
      type: Boolean,
      default: false,
      required: false
    },
    strong: {
      type: Boolean,
      default: false,
      required: false
    },
    weight: {
      type: Number,
      default: null,
      required: false
    },
    italic: {
      type: Boolean,
      default: false,
      required: false
    },
    delete: {
      type: Boolean,
      default: false,
      required: false
    },
    capitalize: {
      type: Boolean,
      default: false,
      required: false
    },
    lowercase: {
      type: Boolean,
      default: false,
      required: false
    },
    uppercase: {
      type: Boolean,
      default: false,
      required: false
    },
    left: {
      type: Boolean,
      default: false,
      required: false
    },
    center: {
      type: Boolean,
      default: false,
      required: false
    },
    right: {
      type: Boolean,
      default: false,
      required: false
    },
    justify: {
      type: Boolean,
      default: false,
      required: false
    },
    baseline: {
      type: Boolean,
      default: false,
      required: false
    },
    top: {
      type: Boolean,
      default: false,
      required: false
    },
    middle: {
      type: Boolean,
      default: false,
      required: false
    },
    bottom: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    className() {
      let className = []

      if (this.tag === 'div') {
        className.push('texts')
      } else {
        className.push('text')
      }

      if (this.link) {
        className.push('is-link')
      }

      if (this.linkReverse) {
        className.push('is-link-reverse')
      }

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
