import React from 'react';
import './UserCard.css';

function UserCard(props) {
    const { user } = props;

    return (
        <div class="User Card">
        <img class="UserCard_image" src={user.avatar_url} alt="" />
        <div className="UserCard_meta">
        <h3>{user.login}</h3>
        <p>{user.bio}</p>
        </div>
        </div>
    )
}

export default UserCard;