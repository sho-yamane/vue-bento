<template>
  <input
    :class="className"
    type="time">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputFile',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
