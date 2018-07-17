var HelloWorld = React.createClass({

    getInitialState: function () {
        return { name: '' };
    },
    componentDidMount: function () {
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            success: function (data) {
                this.setState(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind.this
        });
    },

    render: function () {
        return (
            //<div> Hello{this.props.name}</div>
            <div> Hello{this.state.name}</div>
            );
    }
});

React.render(
    //<HelloWorld name="World" />,
    <HelloWorld url="/home/getname" />,
    document.getElementById('container')
);