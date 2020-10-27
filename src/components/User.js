import React, {useState , useEffect} from 'react'

const User = () => {
    const [user, setUser] =  useState(null);
    useEffect( () => {
       fetch('https://jsonplaceholder.typicode.com/users/1')
       .then( res => res.json())
       .then( res => setUser(res) )
    }, []);


    return (
        <div className="user">
            <h2>User Details</h2>
            {user ? (
            <div className="profile"> 
                <h3>{user.name} </h3>
                <p>{user.email}</p>
                <a href={user.website}>{user.website}</a>
            </div> 
        ) : ('<h2>loading</h2>') }
        </div>
    )
}

export default User
