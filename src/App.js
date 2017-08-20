import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import UserList from './UserList';
import UserDetails from './UserDetails';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        this.grabUsers();
    }

    grabUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                if(users) {
                    this.setState({ users });
                }
            })
            .catch((ex) => {
                console.error(ex);
            });
    }

    render() {
        // Which page is shown is controlled here.
        // We need to pass the user info to each sub-component, so that we don't have to continually fetch the info with each page change.
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <UserList {...props} users={this.state.users} />
                    )}/>
                    <Route path="/user/:id" render={(props) => (
						<UserDetails {...props} users={this.state.users} />
					)}/>
                </Switch>
            </div>
        );
    }
}

export default App;
