var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');



//Load foundation library
//require('style!css!foundation-sites/dist/foundation.min.css')//to style these html we need embed the chain with style loader
//firup foundation
$(document).foundation();

//App css
require('!style!css!sass!applicationStyles')

//common DOM method
ReactDOM.render(
<p>Boilerplate-3 project</p>,
document.getElementById('app')
);
