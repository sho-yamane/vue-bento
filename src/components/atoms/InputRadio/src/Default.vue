<template>
  <input type="radio">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputRadio',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
