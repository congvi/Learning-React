import React from 'react';
import Remarkable from 'remarkable'

var TodoResult = React.createClass({
  render: function() {
    var createItem = function(item) {
        var num = item.text;
        var check = num%2;
        
        if(isNaN(+num)==true){
            return <li>{num} không phải là số</li>;
        }
        else {
            if(num%2==1){
                return <li>{num} là số lẻ</li>
                }
            else return <li>{num} là số chẵn</li>
        }
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
export var TodoChecknumber = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat({text: this.state.text});
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <br />
        <hr />
        <h3>Nhập vào một số bất kỳ</h3>
        <TodoResult items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>Check Number</button>
        </form>
      </div>
    );
  }
});