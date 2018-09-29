import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTopArticlesByCountry } from '../redux/actions'

const PanelLeft = ({ dispatch }) =>{
     
   let input, selectLanguage, selectCategory, selectSource, inputKeyword, selectCountry;

   return (
   <div class="w3-col m3">
    <div class="w3-card w3-round w3-white">
      <div class="w3-container">
        <h4 class="w3-center">Search News</h4>
        <hr></hr>
        <form onSubmit={e => { e.preventDefault()   
          const data = {
              country: selectCountry.value,
              language: selectLanguage.value,
              category: selectCategory.value,
              source: selectSource.value,
              keyword: inputKeyword.value
          };   
          dispatch(getTopArticlesByCountry(data)) }}
        >
        <div>
            <label for="category">Category:</label>
            <select id="category" ref={category => selectCategory = category}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <br></br>
        <div>
            <label for="source">Source:</label>
            <select id="source" ref={source => selectSource = source}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <br></br>
        <div>    
            <label for="keyword">Keyword:</label>
            <input id="keyword" ref={keyword => inputKeyword = keyword} />
        </div>
        <br></br>
        <div>
            <label for="language">Language:</label>
            <select id="language" ref={language => selectLanguage = language} >
                <option value="Chinese">Chinese</option>
                <option value="Spanish">Spanish</option>
            </select>
        </div>
        <br></br>
        <div>
            <label for="country">Country:</label>
            <select id="country" ref={country => selectCountry = country} >
                <option value="Chinese">Argentina</option>
                <option value="Spanish">Usa</option>
            </select>
        </div>
        <br></br>    
        <div>                
            <button class="w3-center" type="submit">
                Find
            </button>
        </div>       
        <hr></hr>
      </form>             
      </div>
    </div>
  </div>
)}





export default connect(getTopArticlesByCountry)(PanelLeft)