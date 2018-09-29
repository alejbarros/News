import React from 'react'
import { connect } from 'react-redux'
import { getLatestNews } from '../redux/actions'

const PanelLatestNews = ({ dispatch }) =>{
     
   let  selectLanguage, inputKeyword;
   return (
    <div class="w3-card w3-round w3-white">
        <div class="w3-container">
            <h4 class="w3-center">Search the latest news</h4>
            <form onSubmit={e => { e.preventDefault()   
            const data = {
              language: selectLanguage.value,
              keyword: inputKeyword.value
          };   
          dispatch(getLatestNews(data)) }}
        >      
            <hr></hr>
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
            <div class="w3-center">                
                <button type="submit">
                      Find
                 </button>
            </div>     
            <hr></hr>
        </form>    
        </div>
    </div>  
)}

export default connect(getLatestNews)(PanelLatestNews)