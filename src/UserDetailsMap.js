// Refs:
//   http://leafletjs.com/examples/quick-start/
//   http://leafletjs.com/reference-1.2.0.html

import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import './UserDetailsMap.css';

class UserDetailsMap extends Component {
    render() {
        let user = this.props.user;
        let position = [parseFloat(user.address.geo.lat), parseFloat(user.address.geo.lng)];
        let zoom = 13;
        return (
            <div className="UserDetailsMap">
                <Map center={position} zoom={zoom}>
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} />
                </Map>
            </div>
        );
    }
}

export default UserDetailsMap;
