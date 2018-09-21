import React from 'react'
import { shallow } from 'enzyme'
import Article from './Article'
import ArticleItem from './ArticleItem'

const setup = article => {
  const actions = {
    onAddToCartClicked: jest.fn()
  }

  const component = shallow(
    <ArticleItem article={article} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('button'),
    article: component.find(Article)
  }
}

let productProps

describe('ArticleItem component', () => {
  beforeEach(() => {
    ArticleProps = {
      title: 'title 1',
      author: 'author 1',
      url: 'www.google.com'
    }
  })

  it('should render article', () => {
    const { article } = setup(articleProps)
    expect(article.props()).toEqual({ title: 'title 1', author: 'author 1', url: 'www.google.com' })
  })

  it('should render Add To Cart message', () => {
    const { button } = setup(articleProps)
    expect(button.text()).toMatch(/^Add to cart/)
  })

  it('should not disable button', () => {
    const { button } = setup(articleProps)
    expect(button.prop('disabled')).toEqual('')
  })

  it('should call action on button click', () => {
    const { button, actions } = setup(articleProps)
    button.simulate('click')
    expect(actions.onAddToCartClicked).toBeCalled()
  })

})
