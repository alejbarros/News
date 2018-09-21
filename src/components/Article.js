import React from 'react'
import PropTypes from 'prop-types'

const Article = ({ author, title, url }) => (
  <div>
    {author} ---  {title}  ----- {url}
  </div>
)

Article.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default Article