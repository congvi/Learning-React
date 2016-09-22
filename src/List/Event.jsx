import React from 'react';


export var Image = React.createClass({
      propTypes: {
        name: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
      },
      
      getInitialState() {
          
        return {
          
          src: 'http://gereports.digimed.vn/wp-content/uploads/2016/09/mask-dtb.gif',
          title: 'Hình ảnh ban đầu'
        };
      },
      
      // event handler
      onClick() {
        
        this.setState({src: 'http://gereports.digimed.vn/wp-content/uploads/2016/09/pasted-image-1920x10801-534x462.jpg'});
        this.setState({title: 'Hình ảnh sau khi thay đổi'})
        
    },
      render() {
        //var src='http://canime.files.wordpress.com/2010/05/mask-dtb.jpg';
        return (
          <div>
            <br />
            <hr />
            <h3>{this.state.title}</h3>
            <img src={this.state.src} width={this.props.width} height={this.props.height} alt="alt" />
            <span>{this.props.name}</span>
            <button onClick={this.onClick}>Change Image!</button>
          </div>
        );
      }
    });