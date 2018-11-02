<template>
  <component
    :is="tag"
    :class="className"
    class="is-dark-7"
  >
    <slot>text</slot>
  </component>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbHeadingDark7',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
