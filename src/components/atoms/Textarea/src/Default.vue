<template>
  <textarea
    :class="className"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
    <slot></slot>
  </textarea>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbTextarea',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
