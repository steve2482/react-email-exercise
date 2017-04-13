require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/app';
import EmailList from './components/email-list';
import EmailContents from './components/email-contents';

const routes = (
	<Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path=':mailbox_name' component={EmailList} />
      <Route path=':mailbox_name/:emailId' component={EmailContents} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(routes, document.getElementById('app')));