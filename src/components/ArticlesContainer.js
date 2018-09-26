import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions'
import { getVisibleArticles } from '../redux/reducers/articles'
import ArticleItem from '../components/ArticleItem'
import ArticlesList from '../components/ArticlesList'

const ArticlesContainer = ({ articles, addToCart }) => (
  <ArticlesList title="Articles">
    {articles.map(article =>
      <ArticleItem
        key={article.id}
        article={article}
        url={article.url}
        description = {article.description}
        publishedAt = {article.publishedAt}
        urlToImage = {article.urlToImage}
        content = {article.content}
        source = {article.source.name}
        onAddToCartClicked={() => addToCart(article.id)}  />
    )}
  </ArticlesList>
)

ArticlesContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    publishedAt : PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    source : PropTypes.string.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  articles: getVisibleArticles(state.articles)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ArticlesContainer)
