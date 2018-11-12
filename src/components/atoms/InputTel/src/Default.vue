<template>
  <input
    :class="className"
    type="tel">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputTel',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
