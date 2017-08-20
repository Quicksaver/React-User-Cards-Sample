import React, { Component } from 'react';

import './User.css';

class User extends Component {
    render() {
        return (
            <div className="User">
                <div className="User-CompanyName">{this.props.user.company.name}</div>
                <div className="User-CatchPhrase">{this.props.user.company.catchPhrase}</div>
                <div className="User-Name">Owner: {this.props.user.name}</div>
                <div className="User-City">Location: {this.props.user.address.city}</div>
            </div>
        );
    }
}

export default User;
