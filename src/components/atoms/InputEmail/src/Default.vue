<template>
  <input
    :class="className"
    type="email">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputEmail',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
