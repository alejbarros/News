import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTopNews } from '../redux/actions'

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
          dispatch(getTopNews(data)) }}
        >
        <div>
            <label for="category">Category:</label>
            <select id="category" ref={category => selectCategory = category}>
                <option value="" selected>Select one category</option>
                <option value="business">Business</option>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
            </select>
        </div>
        <br></br>
        <div>
            <label for="source">Source:</label>
            <select id="source" ref={source => selectSource = source}>
                <option value=""></option>
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
                <option value="" selected>Select one language</option>               
                <option value="ar">Arabic</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="he">Hebrew</option>
                <option value="it">Italian</option>
                <option value="nl">Dutch</option>
                <option value="no">Norwegian</option>
                <option value="ru">Russian</option>
                <option value="se">Northern Sami</option>
                <option value="zh">Chinese</option>
            </select>
        </div>
        <br></br>
        <div>
            <label for="country">Country:</label>
            <select id="country" ref={country => selectCountry = country} >
                <option value="" selected>Select one country</option>
                <option value="ae">United Arab Emirates</option>
                <option value="ar">Argentina</option>
                <option value="at">Austria</option>
                <option value="au">Australia</option>
                <option value="be">Belgium</option>
                <option value="bg">Bulgaria</option>
                <option value="br">Brazil</option>
                <option value="ca">Canada</option>
                <option value="ch">Switzerland</option>
                <option value="cn">China</option>
                <option value="co">Colombia</option>
                <option value="cu">Cuba</option>
                <option value="cz">Czechia</option>
                <option value="de">Germany</option>
                <option value="eg">Egypt</option>
                <option value="fr">France</option>
                <option value="gb">United Kingdom</option>
                <option value="gr">Greece</option>
                <option value="hk">Hong Kong</option>
                <option value="kr">Korea</option>
                <option value="hu">Hungary</option>
                <option value="id">Indonesia</option>
                <option value="ie">Ireland</option>
                <option value="il">Israel</option>
                <option value="in">India</option>
                <option value="it">Italy</option>
                <option value="jp">Japan</option>
                <option value="lt">Lithuania</option>
                <option value="lv">Latvia</option>
                <option value="ma">Morocco</option>
                <option value="mx">Mexico</option>
                <option value="mv">Maldives</option>
                <option value="my">Malaysia</option>
                <option value="ng">Nigeria</option>
                <option value="nl">Netherlands</option>
                <option value="no">Norway</option>
                <option value="nz">New Zealand</option>
                <option value="ph">Philippines</option>
                <option value="pl">Poland</option>
                <option value="pt">Portugal</option>
                <option value="ro">Romania</option>
                <option value="rs">Serbia</option>
                <option value="ru">Russian Federation</option>
                <option value="sa">Saudi Arabia</option>
                <option value="se">	Sweden</option>
                <option value="si">Slovenia</option>
                <option value="sk">Slovakia</option>
                <option value="th">Thailand</option>
                <option value="tr">	Turkey</option>
                <option value="tw">Taiwan</option>
                <option value="ua">Ukraine</option>
                <option value="us">United States of America</option>
                <option value="ve">Venezuela</option>
                <option value="za">South Africa</option>
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





export default connect(getTopNews)(PanelLeft)