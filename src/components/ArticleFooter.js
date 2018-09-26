import React from 'react'
import PropTypes from 'prop-types'
import '../css/w3.css'
import '../css/w3-theme-blue-grey.css'

const ArticleFooter = ({author , source , url }) => (
    <footer class="w3-container w3-theme-d5">
        <p>Author :  {author}</p>
        <p>Source : {source} </p>
        <p>Url :<a href={url} target="_blank">{url}</a></p>
    </footer> 
)

ArticleFooter.PropTypes = {   
    source : PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default ArticleFooter