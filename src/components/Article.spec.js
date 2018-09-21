import React from 'react'
import { shallow } from 'enzyme'
import Article from './Article'

const setup = props => {
  const component = shallow(
    <Article {...props} />
  )

  return {
    component: component
  }
}

describe('Article component', () => {
  it('should render title and author and url', () => {
    const { component } = setup({ title: 'Test Article', author: 'author' })
    expect(component.text()).toBe('Test Article - author')
  })

  describe('when given inventory', () => {
    it('should render title, author, and url', () => {
      const { component } = setup({ title: 'Test Article', author: 'author', url: 'www.google.com' })
      expect(component.text()).toBe('Test Article - author - www.google.com')
    })
  })
})
