<template>
  <input
    :class="className"
    :value="value"
    type="text"
    @input="$emit('input', $event.target.value)">
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbInputText',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
