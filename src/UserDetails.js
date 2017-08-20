import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserDetailsMap from './UserDetailsMap';
import './UserDetails.css';

class UserDetails extends Component {
    renderTags(bs) {
        let tags = bs.split(" ");
        return tags.map((tag) => (
            <span key={tag} className="UserDetails-Tag">{tag}</span>
        ));
    }

    render() {
        // The id of the user is passed through the pathname.
        let user;
        let id = parseInt(this.props.match.params.id, 10);
        for(let entry of this.props.users) {
            if(entry.id === id) {
                user = entry;
                break;
            }
        }

        // For while it's still loading.
        if(!user) {
            return (
                <div className="UserDetails">
                    <Link to="/">Go back.</Link>
                </div>
            );
        }

        return (
            <div className="UserDetails">
                <div className="UserDetails-CompanyName">{user.company.name}</div>
                <div className="UserDetails-CatchPhrase">{user.company.catchPhrase}</div>
                <div className="UserDetails-Website">Website: <a href={"http://"+user.website} target="_blank">{user.website}</a></div>
                <div className="UserDetails-Tags">Tags:
                    {this.renderTags(user.company.bs)}
                </div>
                <div className="UserDetails-Name">Owner: {user.name} (<span className="UserDetails-Username">{user.username}</span>)</div>
                <div className="UserDetails-Address">Address:</div>
                <div className="UserDetails-Street">{user.address.street}, {user.address.suite}</div>
                <div className="UserDetails-City">{user.address.city}</div>
                <div className="UserDetails-Zipcode">{user.address.zipcode}</div>
                <div className="UserDetails-Contact">Contact:</div>
                <div className="UserDetails-Email"><a href={"mailto:"+user.email}>{user.email}</a></div>
                <div className="UserDetails-Phone">{user.phone}</div>
                <UserDetailsMap user={user}/>
                <div className="UserDetails-GoBack"><Link to="/">Go back.</Link></div>
            </div>
        );
    }
}

export default UserDetails;
