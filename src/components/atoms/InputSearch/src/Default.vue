<template>
  <input
    :class="className"
    type="search">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputSearch',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
