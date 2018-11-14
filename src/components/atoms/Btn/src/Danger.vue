<template>
  <button
    :class="className"
    class="is-danger"
  >
    <slot>text</slot>
  </button>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbBtnDanger',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
