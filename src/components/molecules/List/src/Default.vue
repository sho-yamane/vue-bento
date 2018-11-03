<template>
  <component
    :is="tag"
    :class="className"
  >
    <vb-item 
      v-for="(item, key) in list" 
      :key="key">{{ item }}</vb-item>
  </component>
</template>

<script>
import Presenter from '../Presenter.vue'
import VbItem from '../../../atoms/Item/src/Default'
export default {
  name: 'VbList',
  components: { VbItem },
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
