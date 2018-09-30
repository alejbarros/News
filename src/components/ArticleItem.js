import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import '../css/w3.css'
import ArticleImage from './ArticleImage';
import ArticleFooter from './ArticleFooter';

const ArticleItem = ({ article }) => (
  <div class="w3-container w3-card w3-white w3-round w3-margin">
    <Article
      title={article.title}      
      description = {article.description}
      publishedAt = {article.publishedAt}
      content = {article.content}
     />
    <ArticleImage
      urlToImage = {article.urlToImage}
    />
    <ArticleFooter 
      url = {article.url}
      source = {article.source.name}
      author = {article.author}
    />
    <br></br>
  </div>
)

ArticleItem.propTypes = {
  article: PropTypes.shape({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  publishedAt : PropTypes.string.isRequired,
  urlToImage : PropTypes.string.isRequired,
  content : PropTypes.string.isRequired,
  source : PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ArticleItem
