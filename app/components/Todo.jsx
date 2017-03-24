var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {id, text, completed} = this.props;
    return (
      <div onClick = { () => {
        this.props.onToggle(id);  
      }}>
      <ul>
        <input type="checkbox" checked={completed}/>
        {text}
      </ul>
      </div>
    );
  }
});

module.exports = Todo;
