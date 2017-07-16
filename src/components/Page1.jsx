var React = require('react');
var createReactClass = require('create-react-class');
var Page1 = createReactClass({
    render: function(){
        return (
            <div>
                <h1>Header</h1>
                <p>{this.props.children}</p>
                <p>page 1</p>
                <h1>Footer</h1>
            </div>
        );
    }
})
module.exports = Page1;
