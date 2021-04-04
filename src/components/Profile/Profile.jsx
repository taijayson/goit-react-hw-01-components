import PropTypes from "prop-types";
import styles from "./Profile.module.css"

const ProfilePage = (props) => {
        const { profile } = props
        return (
        <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={profile.avatar}
                alt={profile.name}
                className={styles.avatar}
            />
            <p className={styles.name}>{profile.name}</p>
                    <p className={styles.tag}>@{profile.tag}</p>
                    <p className={styles.location}>{profile.location}</p>
        </div>
                <ul className={styles.stats}>
            <li className={styles.stats_item}>
            <span className={styles.label}>Followers |</span>
                <span className={styles.quantity}>{profile.stats.followers}</span>
            </li>
            <li className={styles.stats_item}>
            <span className={styles.label}>Views |</span>
            <span className={styles.quantity}>{profile.stats.views}</span>
            </li>
            <li className={styles.stats_item}>
                <span className={styles.label}>Likes |</span>
            <span className={styles.quantity}>{profile.stats.likes}</span>
            </li>
        </ul>
        </div>
        )}

ProfilePage.propTypes = {
    profile:PropTypes.shape({
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
        })
}      

export default ProfilePage;

