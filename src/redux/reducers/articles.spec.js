import reducer, * as products from './articles'

describe('reducers', () => {
  describe('articles', () => {
    let state

    describe('when articles are received', () => {

      beforeEach(() => {
        state = reducer({}, {
          type: 'RECEIVE_ARTICLES',
          articles: [
            {
              id: 1,
              title: 'Product 1',
              author: 'author 1'
            },
            {
              id: 2,
              title: 'Product 2',
              author: 'author 2'
            }
          ]
        })
      })

      it('contains the articles from the action', () => {
        expect(articles.getArticle(state, 1)).toEqual({
          id: 1,
          title: 'Product 1',
          author:  'author 1'
        })
        expect(articles.getArticle(state, 2)).toEqual({
          id: 2,
          title: 'Product 2',
          author: 'author 2'
        })
      })

      it ('contains no other articles', () => {
        expect(articles.getArticle(state, 3)).toEqual(undefined)
      })

      it('lists all of the articles as visible', () => {
        expect(articles.getVisibleArticles(state)).toEqual([
          {
            id: 1,
            title: 'Product 1',
            author: 'author 1'
          }, {
            id: 2,
            title: 'Product 2',
            author : 'author 2'
          }
        ])
      })

      describe('when an item is added to the cart', () => {

        beforeEach(() => {
          state = reducer(state, { type: 'ADD_TO_CART', articleId: 1 })
        })

        it('the inventory is reduced', () => {
          expect(articles.getVisibleArticles(state)).toEqual([
            {
              id: 1,
              title: 'Product 1',
              author : 'author 1'
            }, {
              id: 2,
              title: 'Product 2',
              author: 'author 2'
            }
          ])
        })

      })

    })
  })
})
