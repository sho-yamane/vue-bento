<template>
  <component
    :is="tag"
    :class="className"
    class="is-danger"
  >
    <slot>text</slot>
  </component>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbTextDanger',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
