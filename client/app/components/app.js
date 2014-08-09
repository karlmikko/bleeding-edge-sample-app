/** @jsx React.DOM */

var React = require("react");
var Promise = require('es6-promise').Promise;

var MainHeader = require('./main_header');

var App = React.createClass({
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
  componentDidMount: function () {
    //componentDidMount only gets called from client side - not on server rendering
    console.log("Mounted");
  },
  componentWillMount: function () {
    //componentWillMount is called from client side and server rendering
    console.log("Going to Mount");
  },
  render: function () {
    // console.log(this.props);
    return (
      <div className='app'>
        <MainHeader currentUri='/'/>
        <div className='main-content'>
          {<this.props.activeRouteHandler />}
        </div>
      </div>
    );
  }
});

module.exports = App;
