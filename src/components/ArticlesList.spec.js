import React from 'react'
import { shallow } from 'enzyme'


const setup = props => {
  const component = shallow(
    <ArticlesList title={props.title}>{props.children}</ArticlesList>
  )

  return {
    component: component,
    children: component.children().at(1),
    h3: component.find('h3')
  }
}

describe('ArticlesList component', () => {
  it('should render title', () => {
    const { h3 } = setup({ title: 'Test Products' })
    expect(h3.text()).toMatch(/^Test Products$/)
  })

  it('should render children', () => {
    const { children } = setup({ title: 'Test Products', children: 'Test Children' })
    expect(children.text()).toMatch(/^Test Children$/)
  })
})
