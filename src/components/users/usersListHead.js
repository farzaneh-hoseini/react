import React, { Component } from 'react';  

class usersListHead extends Component {
    render() {
        return(
            <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">mobile Number</th>
            <th scope="col">Birhdate</th>
            <th scope="col">Role</th>
            <th scope="col">Edite</th>
            <th scope="col">Delete</th>
            </tr>
            </thead>
        )
    }
}

export default usersListHead;