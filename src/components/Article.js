import React from 'react'
import PropTypes from 'prop-types'
import '../css/w3.css'
import '../css/w3-theme-blue-grey.css'


const styleParagraph  = {
  font: '10px arial, sans-serif'
};

const Article = ({ title, description , publishedAt,content }) => (
  <div>   
    <span class="w3-right w3-opacity"> {publishedAt} </span>
    <h4>{title}</h4>
    <h6>{description}</h6>
    <p style={styleParagraph}>{content}</p>   
  </div>  
)

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  publishedAt : PropTypes.string.isRequired,
  content : PropTypes.string.isRequired, 
}

export default Article