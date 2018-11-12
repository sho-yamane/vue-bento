<template>
  <tfoot>
    <slot/>
  </tfoot>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbTfoot',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
