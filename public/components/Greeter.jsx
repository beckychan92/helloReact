var React = require('react');
var GreeterMessage = require('./GreeterMessage.jsx');
var GreeterForm = require('./GreeterForm.jsx');

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

module.exports = Greeter;