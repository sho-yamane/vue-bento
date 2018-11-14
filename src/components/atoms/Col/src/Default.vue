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
  name: 'VbCol',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
