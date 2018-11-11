<script>
export default {
  name: 'Presenter',
  props: {
    visualType: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['btn', 'label'].includes(val)
      }
    },
    inputType: {
      type: String,
      default: null,
      required: false,
      validator(val) {
        return ['radio', 'checkbox'].includes(val)
      }
    },
    decoration: {
      type: String,
      default: 'plain',
      required: false,
      validator(val) {
        return ['plain', 'melt', 'outline', 'ghost'].includes(val)
      }
    }
  },
  computed: {
    className() {
      const className = []

      if (this.visualType) {
        className.push(`is-${this.visualType}`)
      }

      if (this.inputType) {
        className.push(`is-${this.inputType}`)
      }

      if (this.visualType === 'btn' && this.decoration) {
        className.push(`is-${this.decoration}`)
      }

      return className
    }
  }
}
</script>
