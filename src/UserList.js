import React, { Component } from 'react';

import User from './User';
import './UserList.css';

class UserList extends Component {
    renderGreetings() {
        return this.props.users.map((user) => {
            return (
                <User key={user.id} user={user} />
            );
        });
    }

    render() {
        return (
            <div className="UserList">
                {this.renderGreetings()}
            </div>
        );
    }
}

export default UserList;
