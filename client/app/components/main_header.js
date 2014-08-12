/** @jsx React.DOM */

var React = require("react");

var MainNav = require('./main_nav');

var MainHeader = React.createClass({
  render: function () {
    return (
      <header className='main-header navbar navbar-static-top'>
        <div className='container-fluid'>
          <a href='/' className='navbar-brand logo'>SurveyBuilder</a>
          <MainNav />
        </div>
      </header>
    );
  }
});

module.exports = MainHeader;
