/** @jsx React.DOM */
var React = require("react");
var Router = require("react-router");
var Routes = Router.Routes;
var Route = Router.Route;
var AsyncState = require('react-router').AsyncState;
var Promise = require('es6-promise').Promise;


var App = require('./components/app');
var NotFound = require('./components/not_found');


var SurveyTake = 
SurveyEdit = 
SurveySummary = React.createClass({
  render: function(){
    return <div>Hi</div>
  }
});

var SurveyList = React.createClass({
  mixins:[AsyncState],
  statics:{
    getInitialAsyncState: function(path, query, setState){
      return new Promise(function(resolve, reject){
        setTimeout(function(){
          setState({
            name:'nav'
          })
          resolve();
        }, 1000)
      });
    }
  },
  render: function(){
    if(!this.state.name){
      return <div>Loading ... </div>
    }
    return <div>List {this.state.name}</div>
  }
});

var SurveyAdd = React.createClass({
  render: function(){
    return <div>Add</div>
  }
});

var app_router = <Routes location="history">
      <Route handler={App}>
        <Route name="list" path="/" handler={SurveyList} />
        <Route name="add" path="/add_survey" handler={SurveyAdd} />

        <Route name="edit" path="/surveys/:survey_id/edit" handler={SurveyEdit} />
        <Route name="take" path="/surveys/:survey_id" handler={SurveyTake} />
        <Route name="summary" path="/surveys/:survey_id/summary" handler={SurveySummary} />
        
        <Route name="not-found" path="*" handler={NotFound}/>
      </Route>
    </Routes>

module.exports = app_router;