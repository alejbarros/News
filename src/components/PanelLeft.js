import React from 'react'
import PanelTopNews from './PanelTopNews';
import PanelLatestNews from './PanelLatestNews';

const PanelLeft = ({ dispatch }) =>(
    <div class="w3-col m3">
        <PanelLatestNews />       
        <br></br>
        <PanelTopNews />
    </div>      
)

export default PanelLeft