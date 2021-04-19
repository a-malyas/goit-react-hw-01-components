import React from 'react';
import PropTypes from "prop-types";

const FriendList = ({friends}) => (
    <ul className="friend-list">
        {friends.map(friend =>
            <li key={friend.id} className="item">
                <span className="status">{friend.isOnline}</span>
                <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                <p className="name">{friend.name}</p>
            </li>
        )}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired})
    ).isRequired,
};

export default FriendList;