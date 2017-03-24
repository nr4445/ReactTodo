var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
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
          completed: false
        }
      ]
    })
  },

  handleToggle: function (id) {
    console.log('In handleToggle');
    var updatedTodos = this.state.todos.map((todo) => {
      console.log('==> in updateTodos');
      if(todo.id === id){
        console.log(todo.text);
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
    alert(id);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
