<template>
  <button
    :class="className"
    class="is-success"
  >
    <slot>text</slot>
  </button>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbButtonSuccess',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
