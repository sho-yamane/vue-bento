<template>
  <input type="checkbox">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputCheckbox',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
