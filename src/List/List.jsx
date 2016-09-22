import React from 'react';
import Remarkable from 'remarkable'

/*export default () => {
  const things = [
    'First',
    'Second',
    'Third',
  ];

  return (
    <ul>
      {things.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};
*/
export var MarkdownEditor = React.createClass({
  getInitialState: function() {
    return {value: 'Type some *markdown* here!'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.value});
  },
  rawMarkup: function() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  },
  render: function() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.rawMarkup()}
        />
      </div>
    );
  }
});
