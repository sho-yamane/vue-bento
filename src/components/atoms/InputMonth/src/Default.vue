<template>
  <input
    :class="className"
    type="month">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputMonth',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped>
@import './style.scss';
</style>
