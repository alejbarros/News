import React, { Component } from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom'

import ArticleView from './components/ArticleView'

class App extends Component {
    render() {
        const pathname = window.location.pathname
        return (
            <div>
                 <Route path="/articleview/:id" component={ArticleView} />
            </div>
        );
    }
}
export default App;
