/** @jsx React.DOM */

React = require('react');
App = require('./components/app');
FormPanel = require('./components/login');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="signin" handler={FormPanel}/>
    <DefaultRoute handler={FormPanel} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
