var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./components/GreeterMessage.jsx');
var GreeterForm = require('./components/GreeterForm.jsx');


var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'Hello from the other side!'
        };
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },

    handleNewData: function(updates) {
        this.setState(updates);
    },

    render: function () {
        var name = this.state.name; //prop from greeter
        var message = this.state.message
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        )
    }
});

var firstName = 'Becky';
var lastName = 'Chan'
var message = 'Dim Sum is sleeping!'
ReactDOM.render(
    <Greeter name={firstName + ' ' + lastName} message={message}/>, //prop
    document.getElementById('app')
);