var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>HellofromMesssage {name}</h1>
                <p>this is message: {message}</p>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" />
                    {/* <button>button for GM</button> */}
                </form>
            </div>

        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        if (name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <button>Greeter Form !</button>
            </form>
        )
    }
})

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

    handleNewName: function(name) {
        this.setState({
            name: name
        });
    },

    render: function () {
        var name = this.state.name; //prop from greeter
        var message = this.state.message
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>
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