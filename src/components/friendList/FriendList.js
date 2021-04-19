import React from 'react';
import PropTypes from "prop-types";
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={styles['friend-list']}>
        {friends.map(friend =>
            <li key={friend.id} className={styles.item}>
                <span className={friend.isOnline ? styles['status-on'] : styles['status-off']}></span>
                <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={styles.name}>{friend.name}</p>
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