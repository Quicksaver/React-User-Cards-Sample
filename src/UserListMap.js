// Refs:
//   http://leafletjs.com/examples/quick-start/
//   http://leafletjs.com/reference-1.2.0.html

import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import './UserListMap.css';

class UserListMap extends Component {
    renderMarkers(users) {
        // I can't add react-router-dom links inside the Popup. It throws a lack of router context.
        return users.map((user) => (
            <Marker key={user.id} position={[parseFloat(user.address.geo.lat), parseFloat(user.address.geo.lng)]}>
                <Popup>
                    <span>
                        <span className="UserListMap-CompanyName">{user.company.name}</span>
                        <br/>
                        <span>{user.address.city}</span>
                    </span>
                </Popup>
            </Marker>
        ));
    }

    render() {
        let zoom = 1;
        return (
            <div className="UserListMap">
                Overview of company locations:
                <Map center={[ 0, 0 ]} zoom={zoom}>
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {this.renderMarkers(this.props.users)}
                </Map>
            </div>
        );
    }
}

export default UserListMap;
