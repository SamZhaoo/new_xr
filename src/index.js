import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import Login from './views/Login'
// import Home from './views/Home'
import * as serviceWorker from './serviceWorker'
import './styles/index.less'
import RouterConfig from './router/index.js';

ReactDOM.render(
	<RouterConfig></RouterConfig>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
