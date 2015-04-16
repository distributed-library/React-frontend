/** @jsx React.DOM */

React = require('react');
APP = require('./components/app');
FormPanel = require('./components/login');

React.render(
  <FormPanel />,
  document.getElementById('loginbox')
);
