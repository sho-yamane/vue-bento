<template>
  <tbody>
    <slot/>
  </tbody>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbTbody',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
