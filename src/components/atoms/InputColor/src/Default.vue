<template>
  <input type="color">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputColor',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
