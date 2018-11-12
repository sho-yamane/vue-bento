<template>
  <tr :class="className">
    <slot/>
  </tr>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbTr',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
