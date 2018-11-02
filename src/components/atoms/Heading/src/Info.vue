<template>
  <component
    :is="tag"
    :class="className"
    class="is-success"
  >
    <slot>text</slot>
  </component>
</template>


<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbHeadingSuccess',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
