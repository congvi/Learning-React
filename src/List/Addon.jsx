import React from 'react';

export var Avatar = React.createClass({
      propTypes: {
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
        initialLike: React.PropTypes.bool.isRequired,
        // Thêm Interface onDelete()
        onDelete: React.PropTypes.func.isRequired,
      },
      getInitialState() {
        return {
          liked: this.props.initialLike
        };
      },
      onClick() {
        this.setState({liked: !this.state.liked});
      },
      // Ủy quyền cho Component cha xử lý.
      _onDelete() {
        this.props.onDelete(this.props.id);
      },
      render() {
        var textLike = this.state.liked ? 'like' : 'haven\'t liked';
        return (
          <div>
          <li key={this.props.id}>
            <img  src={this.props.src} width={this.props.width} height={this.props.height} alt="alt"/>
            <span> {this.props.name}</span>
            <button onClick={this.onClick}>{textLike}</button>
            <button onClick={this._onDelete}>Delete</button>
          </li>
          <br />
          </div>
        );
    }
    });
    export var Avatars = React.createClass({
      getInitialState() {
        return {
          avatars: [
            {id: 1, name: "Avatar 1", height: 100, width: 100, initialLike: false, src: "http://gereports.digimed.vn/wp-content/uploads/2016/09/mask-dtb.gif"},
            {id: 2, name: "Avatar 2", height: 100, width: 100, initialLike: true, src: "http://z4.ifrm.com/30544/116/0/a3359905/avatar-3359905.jpg"},
            {id: 3, name: "Avatar 3", height: 100, width: 100, initialLike: true, src: "http://gereports.digimed.vn/wp-content/uploads/2016/09/pasted-image-1920x10801-534x462.jpg"}
          ]
        }
      },
      // Thêm method deleteItem() set lại State (chứa các Component con) cho Component cha này
      deleteItem(id) {
        this.setState({
          avatars: this.state.avatars.filter(function(avatar){
            return avatar.id !== id;
          })
        });
      },
      render() {  
        var avatars = this.state.avatars.map(function(avatar){
        // use below solution
        // map(function(){},this) 
        // or map(function(){}.bind(this)) 
        // or var that = this; onDelete = {that.deleteUser}
        // to pass this value to map function.
        // bind onDelete (event) to deleteUser.
          return <Avatar onDelete={this.deleteItem} id={avatar.id} name={avatar.name} width={avatar.width} height={avatar.height} src={avatar.src} initialLike={avatar.initialLike} />;
        }, this);
        return (
          <ul>
          <br />
          <hr />
          <br />
          <h3>Một vài Avata cho bạn chọn</h3>
          <br />
              {avatars}
          </ul>
        );
      }
    });
    