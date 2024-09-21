import React, {useState} from 'react'
import axios from 'axios'

const   UserForm = () =>{
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        age:''
    })

const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const res = await axios.post('/api/users',formData)
        console.info('User Created', res.data)
    } catch (err) {
        console.error('Error creating user:', err)
    }
}

const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
}

return (
    <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange}/>
        <input name="email" placeholder="Email" onChange={handleChange}/>
        <input name="age" placeholder="age" onChange={handleChange}/>
        <button type ="submit">Submit</button>
    </form>
)
}
export default UserForm
