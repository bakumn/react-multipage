var React = require('react');
var createReactClass = require('create-react-class');
var Page2 = createReactClass({
    render: function(){
        return (
            <div>
                <h1>Header</h1>
                <p>Page 2</p>
                <h1>Footer</h1>
            </div>
        );
    }
})

module.exports = Page2;
