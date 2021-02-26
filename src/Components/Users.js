import React, { useState } from 'react';
import UserCard from './UserCard';

function Users() {
    const [search, setSearch] = useState(' ')
    const [users, setUsers] = useState([]);
    //build form - done
    //on form submit
    //fetch user https://api.github.com/users/${username
    //then add user card
    const updateSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${search}`)
            .then(res => res.json())
            .then(data => {
                if (data.message && data.message === 'Not Found') {
                    alert('User not found')
                } else {
                    setUsers([...users, data])
                    setSearch('')
                }
            })
    }
    return (
        <>
            <h1> Users Page !!</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={search} onChange={updateSearch} />
                <button type="submit"> Add User </button>
            </form>
            {
                users.map(user => {
                    return <UserCard key={user.id} user ={user} />
                })
            }
        </>
    )
}
export default Users