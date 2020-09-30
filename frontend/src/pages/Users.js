import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Users() {

  const [user, setUser] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:3001/users")
       .then(res => {
         setUser(res.data)
         console.log(process.env.REST_API_GET)
        })
       .catch(err => {console.log(err)})
  }, [])

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const onNameChange = e => {
    setName(e.target.value)
  }
  const onAgeChange = e => {
    setAge(e.target.value)
  }

  const handleSubmit = () => {
     console.log(name+" "+age)
     axios.post("http://localhost:3001/users/add", {
         name,
         age
     }).then(res => {console.log(res)})
     setName("")
     setAge("")
  }

  return (
    <div>
       <h1>Hello User</h1>
       <ul>
          {user.map(i => <h1>This is user name: {i.name} with the age of {i.age}</h1>)}
       </ul>
       <div>
         <label>Name: </label>
         <input value={name} onChange={onNameChange} />
       </div>
       <div>
         <label>Age: </label>
         <input value={age} onChange={onAgeChange} />
        </div>
       <button onClick={() => handleSubmit()}>submit</button>
    </div>
  );
}

export default Users;
