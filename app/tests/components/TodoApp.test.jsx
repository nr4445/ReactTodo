var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exists', () => {
    expect(TodoApp).toExist();
  });
  it('Should add todos state on handleAddTodo', () => {
    var todoText = 'dummy text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('Should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test feature',
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //check that todos first item has completed value as false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handleToggle with 11
    todoApp.handleToggle(11);
    //verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
