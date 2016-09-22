import React from 'react';


export var Newevent = React.createClass({
      propTypes: {
        name: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
        initialLike: React.PropTypes.bool.isRequired,
        initialClick: React.PropTypes.bool.isRequired,
      },
      
      getInitialState() {
        return {
          liked: 'true',
          clicked: 'true',
          title: 'Thay đổi ảnh và lấy lại ảnh ban đầu'
        };
      },
      onClick() {
        this.setState({liked: !this.state.liked});
        this.setState({clicked: !this.state.clicked});
      },

      render() {
          var textLike = this.state.liked ? 'http://gereports.digimed.vn/wp-content/uploads/2016/09/mask-dtb.gif' : 'http://gereports.digimed.vn/wp-content/uploads/2016/09/pasted-image-1920x10801-534x462.jpg';
          var textClick = this.state.clicked ? 'thay đổi ảnh' : 'trở lại ảnh cũ';
        //var src='http://canime.files.wordpress.com/2010/05/mask-dtb.jpg';
        return (
          <div>
            <br />
            <hr />
            <h3>{this.state.title}</h3>
            <br />
            <img src={textLike} width={this.props.width} height={this.props.height} alt="alt" />
            <span>{this.props.name}</span>
            <button onClick={this.onClick}>{textClick}</button>
          </div>
        );
      }
    });