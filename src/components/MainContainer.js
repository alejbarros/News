import React from 'react'
import PropTypes from 'prop-types'
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';

const styleMainContainer  = {
    'max-width':'1400px',
    'margin-top':'80px',
};

const MainContainer = ({ }) => (
    <div class="w3-container w3-content" style={styleMainContainer}>
        <PanelLeft />
        <PanelRight />
    </div>
)



export default MainContainer