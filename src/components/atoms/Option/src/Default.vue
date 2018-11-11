<template>
  <option>
    <slot/>
  </option>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbOption',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
