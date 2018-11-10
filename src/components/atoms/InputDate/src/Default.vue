<template>
  <input
    :class="className"
    type="date">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputDate',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped>
@import './style.scss';
</style>
