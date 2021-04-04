import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem"
import styles from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ),
};

export default FriendList;