<template>
  <input
    :class="className"
    type="text">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputText',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
