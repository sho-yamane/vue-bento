<template>
  <label :class="className">
    <slot/>
  </label>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbLabel',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
