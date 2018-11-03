<template>
  <button
    :class="className"
    class="is-primary"
  >
    <slot>text</slot>
  </button>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbButtonPrimary',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
