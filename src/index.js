import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'antd-mobile/dist/antd-mobile.css';
import RouteConfig from '@/router/index';
import * as serviceWorker from './serviceWorker';
import './config/rem'
import './style/base.scss'
ReactDOM.render(<RouteConfig/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
