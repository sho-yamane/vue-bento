<template>
  <div :class="className">
    <slot/>
  </div>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbAlert',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import 'style';
</style>
