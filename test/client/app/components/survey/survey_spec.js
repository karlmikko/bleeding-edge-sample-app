/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var Survey = require("../../../../../client/app/components/survey/survey");

var renderElem = function(props) {
  var view = new Survey(props);
  return TestUtils.renderIntoDocument(view);
};

describe("Survey", function(){

  var elem = null;
  var props = {};

  describe("rendering", function() {
    beforeEach(function() {
      elem = renderElem(props);
    });

    it("should render", function(){
      expect(TestUtils.isCompositeComponent(elem)).toBe(true);
      expect(TestUtils.scryRenderedDOMComponentsWithTag(elem, 'div').length).toBe(1);
    });
  });

  describe("items", function() {
    beforeEach(function() {
      props.items = [{
        id: 1,
        itemData: {}
      }, {
        id: 2,
        itemData: {}
      }, {
        id: 3,
        itemData: {}
      }];
      elem = renderElem(props);
    });

    it("renders items", function() {
      expect(TestUtils.isCompositeComponent(elem)).toBe(true);
      var surveyItems = elem.getDOMNode().querySelectorAll('.survey-item');
      expect(surveyItems.length).toBe(3);
    });

  });
});