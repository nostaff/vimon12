/* eslint-disable no-undef,no-unused-expressions */

import { mount } from 'vue-test-utils'
import deepAssign from 'deep-assign'
import cloneDeep from 'lodash.clonedeep'
import Badge from '../index'
import { createRenderer } from 'vue-server-renderer'

let options = {
  propsData: {
    color: 'primary',
    theme: 'ios'
  },
  slots: {
    default: '<span>Test</span>'
  }
}

describe('Badge', function () {
  // 清除DOM痕迹
  it('@base: renders the correct markup', function () {
    let opts = deepAssign(cloneDeep(options), {
      propsData: {
        theme: 'md'
      }
    })
    let wrapper = mount(Badge, opts)
    const result = '<span class="ion-badge badge badge-md badge-md-primary"><span>Test</span></span>'
    expect(wrapper.html()).toEqual(result)
  })

  it('@base: renders the correct text', function () {
    let opts = deepAssign(cloneDeep(options), {
      slots: {
        default: '<span>Test</span>'
      }
    })
    let wrapper = mount(Badge, opts)
    expect(wrapper.text()).toEqual('Test')
  })

  it('@base: component must have a name', function () {
    let opts = deepAssign(cloneDeep(options), {
      slots: {
        default: '<span>Name</span>'
      }
    })
    let wrapper = mount(Badge, opts)
    expect(wrapper.name()).toEqual('ion-badge')
  })

  it('@base: have the right className', function () {
    let opts = deepAssign(cloneDeep(options), {
      slots: {
        default: '<span>HasClass</span>'
      }
    })
    let wrapper = mount(Badge, opts)
    expect(wrapper.hasClass('ion-badge')).toBeTruthy()
  })

  it('@base: matches snapshot', () => {
    const renderer = createRenderer()
    const wrapper = mount(Badge, options)
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('@props: color', function () {
    let opts = deepAssign(cloneDeep(options), {
      propsData: {
        color: 'danger',
        theme: 'md'
      },
      slots: {
        default: '<span>color</span>'
      }
    })
    let wrapper = mount(Badge, opts)
    expect(wrapper.hasClass('badge-md-danger')).toBeTruthy()
  })

  it('@props: theme', function () {
    let opts = deepAssign(cloneDeep(options), {
      propsData: {
        theme: 'md'
      },
      slots: {
        default: '<span>theme</span>'
      }
    })
    let wrapper = mount(Badge, opts)
    expect(wrapper.hasClass('badge-md')).toBeTruthy()
  })

  it('@props: theme(default)', function () {
    let wrapper = mount(Badge)
    expect(wrapper.hasClass('badge-ios')).toBeTruthy()
  })
})
