var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {id, text} = this.props;
    return (
      <div>
      <ul>
        {id}.{text}
      </ul>
      </div>
    );
  }
});

module.exports = Todo;
