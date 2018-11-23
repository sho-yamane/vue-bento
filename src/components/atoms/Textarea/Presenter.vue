<script>
export default {
  name: 'Presenter',
  props: {
    value: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    className() {
      const className = []

      className.push('textarea')

      return className
    }
  }
}
</script>
