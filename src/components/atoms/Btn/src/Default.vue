<template>
  <button
    :class="className"
  >
    <slot>text</slot>
  </button>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbBtn',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
