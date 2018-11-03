<template>
  <li class="item">
    <slot/>
  </li>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbItem',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
