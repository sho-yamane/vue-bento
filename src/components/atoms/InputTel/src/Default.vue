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

<style scoped>
@import './style.scss';
</style>
