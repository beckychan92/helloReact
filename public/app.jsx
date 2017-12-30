var React = require('react');
var ReactDOM = require('react-dom');
// var GreeterMessage = require('GreeterMessage');
// var GreeterForm = require('GreeterForm');
var Greeter = require('Greeter');


var firstName = 'Becky';
var lastName = 'Chan'
var message = 'Dim Sum is sleeping!'
ReactDOM.render(
    <Greeter name={firstName + ' ' + lastName} message={message}/>, //prop
    document.getElementById('app')
);