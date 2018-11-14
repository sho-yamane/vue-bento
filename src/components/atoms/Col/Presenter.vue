<script>
export default {
  name: 'Presenter',
  props: {
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
    },
    size: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          'full',
          'auto'
        ].includes(val)
      }
    }
  },
  computed: {
    className() {
      const className = []

      className.push('col')

      if (this.breakpoint && this.size) {
        className.push(`is-${this.breakpoint}-${this.size}`)
      }

      return className
    }
  }
}
</script>
