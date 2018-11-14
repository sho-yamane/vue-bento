<script>
export default {
  name: 'Presenter',
  props: {
    display: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['block', 'inline', 'inline-block', 'none'].includes(val)
      }
    },
    breakpoint: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return [
          'mobile',
          'fablet',
          'tablet',
          'desktop',
          'wide',
          'landscape',
          'portrait',
          'mobile-only',
          'fablet-only',
          'tablet-only',
          'desktop-only',
          'mobile-fablet',
          'mobile-tablet',
          'mobile-desktop'
        ].includes(val)
      }
    }
  },
  computed: {
    className() {
      const className = []

      if (this.display && this.breakpoint) {
        className.push(`is-${this.breakpoint}-${this.display}`)
      }

      return className
    }
  }
}
</script>
