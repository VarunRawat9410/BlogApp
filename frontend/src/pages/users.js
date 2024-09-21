import React from 'react'
import UserTable from '../components/userTable'
import UserForm from '../components/userForm'


const Users = () =>{
    return (
        <div>
            <h1>Users</h1>
            <UserForm></UserForm>
            <UserTable></UserTable>
        </div>
    )
}

export default Users