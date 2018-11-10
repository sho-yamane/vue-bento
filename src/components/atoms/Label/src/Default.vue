<template>
  <label :class="className">
    <slot></slot>
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

<style scoped>
@import './style.scss';
</style>
