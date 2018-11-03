<script>
export default {
  name: 'Presenter',
  props: {
    list: {
      type: Array,
      required: true
    },
    decoration: {
      type: String,
      required: false,
      default: 'disc',
      validator(val) {
        return ['disc', 'circle', 'decimal'].includes(val)
      }
    }
  },
  computed: {
    tag() {
      if (this.decoration === 'decimal') {
        return 'ol'
      } else {
        return 'ul'
      }
    },
    className() {
      const className = []

      className.push('list')

      if (this.decoration) {
        className.push(`is-${this.decoration}`)
      }

      return className
    }
  }
}
</script>
