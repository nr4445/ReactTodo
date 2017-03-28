var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', ()=> {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  //test that showCompleted status gets fliped
  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
       var action = {
         type: 'TOGGLE_SHOW_COMPLETED'
       };
       var res = reducers.showCompletedReducer(df(false), df(action));

       expect(res).toEqual(true);
    });
  });

  describe('todoreducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
it('should toggle todo', () => {
  var todos = [{
    id: '145',
    text: 'something',
    completed: true,
    createdAt: 12345,
    completedAt: 12347
  }];

  var action = {
    type: 'TOGGLE_TODO',
    id: '145'
  };
  var res = reducers.todosReducer(df(todos), df(action));

  expect(res[0].completed).toEqual(false);
  expect(res[0].completedAt).toEqual(undefined);
});

  });


});
