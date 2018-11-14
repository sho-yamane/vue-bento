<script>
export default {
  name: 'Presenter',
  props: {
    tag: {
      type: String,
      default: 'p',
      required: false,
      validator(val) {
        return ['div', 'p', 'span'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'md',
      required: false,
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
    textDecoration: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['link', 'link-reverse'].includes(val)
      }
    },
    horizontal: {
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
    vertical: {
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
    className() {
      const className = []

      if (this.tag === 'div') {
        className.push('texts')
      } else {
        className.push('text')
      }

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

      if (this.horizontal) {
        className.push(`is-${this.horizontal}`)
      }

      if (this.transform) {
        className.push(`is-${this.transform}`)
      }

      if (this.ellipsis) {
        className.push(`is-ellipsis`)
      }

      if (this.vertical) {
        className.push(`is-${this.vertical}`)
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
