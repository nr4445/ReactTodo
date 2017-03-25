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
    //Expect created to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');

  });

  it('Should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test feature',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //check that todos first item has completed value as false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handleToggle with 11
    todoApp.handleToggle(11);
    //verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);

    //Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('Should toggle todo from completed to incompleted', () => {
    var todoData = {
      id: 11,
      text: 'test feature',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //check that todos first item has completed value as false
    expect(todoApp.state.todos[0].completed).toBe(true);
    //call handleToggle with 11
    todoApp.handleToggle(11);
    //verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(false);

    //Expect completedAt do not exist( undefined)
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
