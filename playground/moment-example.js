var moment = require('moment');

console.log(moment().format());

//January 1st 1970 @ 12:00 am-> 0 seconds
//January 1st 1970 @ 12:01 am-> 60 seconds
//December 31st 1969 @ 11:59 pm -> -60 seconds

var now = moment();
console.log('Current time stamp ', now.unix());

var timeStamp = 1490415006;
var currentMoment = moment.unix(timeStamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

//january 3rd, 2016 @ 12:13 AM
console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
