/** @jsx React.DOM */

var React = require("react");
var AsyncState = require('react-router').AsyncState;
var Promise = require('es6-promise').Promise;

var MainHeader = require('./main_header');

var App = React.createClass({
  mixins:[AsyncState],
  statics:{
    getInitialAsyncState: function(path, query, setState){
      return new Promise(function(resolve, reject){
        setTimeout(function(){
          setState({
            name:'karl'
          })
          resolve();
        }, 1000)
      });
    }
  },
  render: function () {
    if(!this.state.name){
      return <div>Loading... </div>
    }
    return (
      <div className='app'>
        <MainHeader currentUri='/'/>
        <div className='main-content'>
          {<this.props.activeRouteHandler />} Hi {this.state.name}
        </div>
      </div>
    );
  }
});

module.exports = App;
