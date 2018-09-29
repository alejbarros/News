import React from 'react'
import BarTop from './BarTop';
import FooterNews from './FooterNews';
import MainContainer from './MainContainer';

const styleBackGround = {
  'background-color': 'silver', 
  'background-image': 'linear-gradient(to right, gray , silver)'
}

const App = () => (
  <body style={styleBackGround}>
    <BarTop />   
    <MainContainer />
    <br></br>
    <FooterNews />  
  </body>
)

export default App