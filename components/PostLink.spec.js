import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import PostLink from '~/components/PostLink'

const factory = (props = {}) => {
  return shallowMount(PostLink, {
    propsData: props,
    stubs: {
      NLink: RouterLinkStub
    }
  })
}

test('post', () => {
  const post = {
    fields: {
      title: 'Test Title 1',
      slug: 'test-title-1'
    }
  }

  const wrapper = factory({ post })
  const a = wrapper.find('a')

  expect(a.text()).toBe('Test Title 1')
  expect(a.props().to).toEqual({ name: 'posts-slug', params: { slug: 'test-title-1' } })
})
