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
  name: 'VbBtnPrimary',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
