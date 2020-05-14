import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {createStore} from 'redux';
import PostReducer from './reducers/PostReducer';
import {Provider} from 'react-redux';
const store=createStore(PostReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

