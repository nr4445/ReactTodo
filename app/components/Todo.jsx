var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = 'Created ';
      var timeStamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timeStamp = completedAt;
      }
      return message + moment.unix(timeStamp).format('MM Do YYYY @ h:mm a');
    };
    return (
      <div onClick = { () => {
        this.props.onToggle(id);
      }}>
      <ul>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </ul>
      </div>
    );
  }
});

module.exports = Todo;
