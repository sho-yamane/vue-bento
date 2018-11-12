<template>
  <table :class="className">
    <slot/>
  </table>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbTable',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
