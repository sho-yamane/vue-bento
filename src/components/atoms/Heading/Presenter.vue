<script>
export default {
  name: 'Presenter',
  props: {
    level: {
      type: Number,
      default: 1,
      required: true
    },
    size: {
      type: String,
      default: 'md',
      required: true,
      validator(val) {
        return ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(val)
      }
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
    align: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['left', 'center', 'right', 'justify'].includes(val)
      }
    },
    transform: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['capitalize', 'lowercase', 'uppercase'].includes(val)
      }
    },
    ellipsis: {
      type: Boolean,
      default: false,
      required: false
    },
    verticalAlign: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['baseline', 'top', 'middle', 'bottom'].includes(val)
      }
    },
    nowrap: {
      type: Boolean,
      default: false,
      required: false
    },
    break: {
      type: Boolean,
      default: false,
      required: false
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
      const className = []

      className.push('heading')

      if (this.size) {
        className.push(`is-${this.size}`)
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

      if (this.textDecoration) {
        className.push(`is-${this.textDecoration}`)
      }

      if (this.align) {
        className.push(`is-${this.align}`)
      }

      if (this.transform) {
        className.push(`is-${this.transform}`)
      }

      if (this.ellipsis) {
        className.push(`is-ellipsis`)
      }

      if (this.verticalAlign) {
        className.push(`is-${this.verticalAlign}`)
      }

      if (this.nowrap) {
        className.push('is-nowrap')
      }

      if (this.break) {
        className.push('is-break')
      }

      return className
    }
  }
}
</script>
