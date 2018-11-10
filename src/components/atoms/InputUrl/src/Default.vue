<template>
  <input
    :class="className"
    type="url">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputUrl',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped>
@import './style.scss';
</style>
