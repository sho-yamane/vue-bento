<template>
  <div :class="className">
    <vb-select 
      :disabled="disabled" 
      :size="multipleSize">
      <vb-option
        v-for="(option, key) in options"
        :key="key"
        :value="option.value">
        {{ option.text }}
      </vb-option>
    </vb-select>
  </div>
</template>

<script>
import Presenter from '../Presenter.vue'
import VbSelect from '../../../atoms/Select/src/Default'
import VbOption from '../../../atoms/Option/src/Default'
export default {
  name: 'VbSelectBox',
  components: { VbOption, VbSelect },
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
