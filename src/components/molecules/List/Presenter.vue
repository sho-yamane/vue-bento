<script>
export default {
  name: 'Presenter',
  props: {
    list: {
      type: Array,

      default: () => {
        return []
      }
    }
  },
  computed: {
    className() {
      return true
    }
  }
}
</script>
