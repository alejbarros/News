import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

const ArticleItem = ({ article, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Article
      title={article.title}
      author={article.author}
      url={article.url} />
    <button
      onClick={onAddToCartClicked}
     >
    </button>
  </div>
)

ArticleItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ArticleItem
