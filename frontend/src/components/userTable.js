import React,{useEffect, useState} from 'react'
import '../App.css'

const UserTable = ()=>{
    const [users, setUsers] = useState([])
    const [loading, setLoaing] = useState(true)

    useEffect(()=>{
      const fetchUsers = async ()=>{
        try{
            const response = await fetch('http://localhost:5000/users')
            const data = await response.json()
            setUsers(data.users)
        } catch(error) {
            console.error('Error fetching users:',error)
        } finally {
            setLoaing(false)
        }
      }
      fetchUsers()
    },[])

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        {users.map(user => (
            <tr key={user.email}>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
            </tr>
        ))}
    </tbody>
</table>
    )
}

export default UserTable
