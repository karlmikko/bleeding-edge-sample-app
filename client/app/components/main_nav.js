/** @jsx React.DOM */

var React = require("react/addons");
var classSet = React.addons.classSet;

var Link = require('react-router').Link;

var MainNav = React.createClass({
  render: function () {
    return (
      <nav className='main-nav'>
        <Link activeClassName="current" to="list">All Surveys</Link>
        <Link activeClassName="current" to="add">Add Survey</Link>
      </nav>
    );
  }
});

module.exports = MainNav;