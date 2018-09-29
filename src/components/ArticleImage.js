import React from 'react'
import PropTypes from 'prop-types'
import '../css/w3.css'
import '../css/w3-theme-blue-grey.css'

const imageStyle  = {

    border: '1px solid #ddd',
    margin: '1% 1% 15% 13%',
    width: '75%'
    
    
 };

const ArticleImage = ({urlToImage}) => (
    <div className="w3-card" >
      <img src={urlToImage} style={imageStyle} className="w3-margin-bottom"/>
    </div>
)

ArticleImage.PropTypes = {   
  urlToImage : PropTypes.string.isRequired
}

export default ArticleImage
