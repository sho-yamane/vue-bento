<template>
  <th>
    <slot/>
  </th>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbTh',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
