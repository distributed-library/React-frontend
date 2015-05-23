
var React = require('react');
var FormPanel = require('./components/login');
var page = require('page');

page('/', function(){
  React.render(<FormPanel/>, document.getElementById('loginbox'));
});

page('/signin', function(){
  React.render(<FormPanel/>, document.getElementById('loginbox'));
});

page('/signup', function(){
  React.render(<h1> sanjiv </h1>, document.getElementById('loginbox'));
});

page.start();
