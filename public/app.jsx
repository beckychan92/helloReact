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

    onButtonClick: function(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        this.refs.name.value = '';
        if (typeof name === 'string' && name.length > 0) {
            this.setState({ //update the state 
                name: name,
            })
        }


    },

    render: function () {
        var name = this.state.name; //prop from greeter
        var message = this.state.message
        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message + ' :)'}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
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