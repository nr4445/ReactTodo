var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
  var state = store.getState();

  console.log('New state', state);

  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//Load foundation library
//require('style!css!foundation-sites/dist/foundation.min.css')//to style these html we need embed the chain with style loader
//firup foundation
$(document).foundation();

//App css
require('!style!css!sass!applicationStyles')

//common DOM method
ReactDOM.render(
<Provider store={store}>
  <TodoApp/>
</Provider>,
document.getElementById('app')
);
