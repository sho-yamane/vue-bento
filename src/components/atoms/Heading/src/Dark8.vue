<template>
  <component
    :is="tag"
    :class="className"
    class="is-dark-8"
  >
    <slot>text</slot>
  </component>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbHeadingDark8',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
