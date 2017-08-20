import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div className="User">
                {this.props.user.username}
            </div>
        );
    }
}

export default User;
