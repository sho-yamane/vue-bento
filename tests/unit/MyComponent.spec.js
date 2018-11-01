import { shallowMount } from '@vue/test-utils'

import MyComponent from '@/MyComponent'

describe('MyComponent', () => {
  it('mounted', () => {
    const wrapper = shallowMount(MyComponent)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
