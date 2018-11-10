<template>
  <textarea :class="className">
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

<style scoped>
@import './style.scss';
</style>
