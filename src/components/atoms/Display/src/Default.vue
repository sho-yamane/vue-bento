<template>
  <div
    :class="className"
  >
    <slot/>
  </div>
</template>

<script>
import Presenter from '../Presenter.vue'
export default {
  name: 'VbDisplay',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
