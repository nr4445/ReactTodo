var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

//var TodoList = require('TodoList');
import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
// var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',

      //--efficient way of writing an array as object,
      //in this case we dont need to loop through the map but can get directly
      //todos: {
      //   [uuid()]: {
      //     text: 'Walk the dogg',
      //     completed: false
      //   },
      //   [uuid()]: {
      //     text: 'Clean the yard',
      //     completed: false
      //   }
      // }
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddTodo: function(text  ) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:uuid(),//to generate randon id
          text:text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },


  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>

          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
