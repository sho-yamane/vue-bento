<template>
  <td>
    <slot/>
  </td>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbTd',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
