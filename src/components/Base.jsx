var React = require('react');
var createReactClass = require('create-react-class');
var Base = createReactClass({
    render: function(){
        return (
            <div>
                <h1>Header</h1>
                <p>{this.props.children}</p>
                <h1>Footer</h1>
            </div>
        );
    }
})
module.exports = Base;
