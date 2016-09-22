import React from 'react';



export var Avatar = React.createClass({
      propTypes: {
        name: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
      },
      
      getInitialState() {
          
        return {
          //src: 'http://canime.files.wordpress.com/2010/05/mask-dtb.jpg'
          src: 'http://canime.files.wordpress.com/2010/05/mask-dtb.jpg',
        };
      },
      
      // event handler
      onClick() {
        this.setState({src: 'http://gereports.digimed.vn/wp-content/uploads/2016/09/pasted-image-1920x10801-534x462.jpg'});
      },
      render() {
        //var src='http://canime.files.wordpress.com/2010/05/mask-dtb.jpg';
        return (
          <div>
            <br />
            <hr />
            <img  src={this.state.src} width={this.props.width} height={this.props.height} alt="alt" />
            <span>{this.props.name}</span>
            <button onClick={this.onClick}>Change Image!</button>
          </div>
        );
      }
    });