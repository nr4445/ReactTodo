
import moment from 'moment';
//import firebase,{firebaseRef} from 'app/firebase/index';
import firebase,{firebaseRef} from 'app/firebase/';//as index is having .js file extension we can specify like this

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

//toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

//toggleTodo(id) TOGGLE_TODO
export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    //var todoRef = firebaseRef.child('todos' + id);//otherthan ES6 or less
    var todoRef = firebaseRef.child(`todos/${id}`);//ES6 version
    var updates = {
      completed,//equal to: completed: completed
      completedAt: completed ? moment().unix() : null
    }
    return todoRef.update(updates).then(() => {
        dispatch(updateTodo(id, updates));
    });
  };
};
