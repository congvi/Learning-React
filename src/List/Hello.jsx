import React from 'react';

export var Hello = React.createClass({
    render: function() {
        return (
            <div>
                <br/>
                <hr/>
                <h3>Hello {this.props.name}</h3>
                <h3>Today's temperature is: {this.props.temperature}</h3>
            </div>
                );
    }
});