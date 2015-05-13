/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li>
              <Link to="signin">Login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="app">Home</Link>
            </li>
          </ul>
        </header>

        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App
