import React, { Component } from 'react';

import UserList from './UserList';

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
        return (
            <div className="App">
                <UserList users={this.state.users}/>
            </div>
        );
    }
}

export default App;
