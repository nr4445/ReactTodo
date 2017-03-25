var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=> {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text : 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'))

      expect(actualTodos).toEqual(todos);
    });

    it('Should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return if valid array in local storage', () => {
      var todos = [{
        id: 25,
        text: 'test all files',
        complted: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTods', () => {
    var todos = [{
      id: 1,
      text: 'some text',
      completed: true
    },{
      id: 2,
      text: 'other text',
      completed: false
    },{
      id: 3,
      text: 'unknown text',
      completed: true
    }];

    it('should return items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, '', '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all todos if search text is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, 'true', '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should filter todos by serach text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, 'true', 'unknown');
      expect(filteredTodos.length).toBe(1);
    });

  });

});
