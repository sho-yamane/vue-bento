<template>
  <component
    :is="tag"
    :class="className"
    class="is-light-5"
  >
    <slot>text</slot>
  </component>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'MbHeadingLight5',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
