var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exists', () => {
    expect(Todo).toExist();
  });

  it('Should toggle onToggle prop with id on click', () => {
    var todoData = {
      id: 445,
      text: 'Write test for Todo.test.jsx test',
      completed: true
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(445);

  });
});
