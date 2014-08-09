/** @jsx React.DOM */

var React = require("react");

var MainHeader = require('./main_header');

var mockSurveyData = require('../mock_survey_data');
var SurveyPage = require("./survey/survey_page");

var App = React.createClass({
  componentDidMount: function () {
    //componentDidMount only gets called from client side - not on server rendering
    console.log("Mounted");
  },
  componentWillMount: function () {
    //componentWillMount is called from client side and server rendering
    console.log("Going to Mount");
  },
  render: function () {
    return (
      <div className='app'>
        <MainHeader currentUri='/'/>
        <div className='main-content'>
          <SurveyPage data={mockSurveyData} />
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
