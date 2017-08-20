import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './User.css';

class User extends Component {
    render() {
        return (
            <Link to={{ pathname: "/user/"+this.props.user.id }}><div className="User">
                <div className="User-CompanyName">{this.props.user.company.name}</div>
                <div className="User-CatchPhrase">{this.props.user.company.catchPhrase}</div>
                <div className="User-Name">Owner: {this.props.user.name}</div>
                <div className="User-City">Location: {this.props.user.address.city}</div>
            </div></Link>
        );
    }
}

export default User;
