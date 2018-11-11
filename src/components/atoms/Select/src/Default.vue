<template>
  <select>
    <slot/>
  </select>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbSelect',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
