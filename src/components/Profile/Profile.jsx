import PropTypes from "prop-types";

const ProfilePage = (props) => {
        const { profile } = props
        return (
        <div className="profile">
        <div className="description">
            <img
            src={profile.avatar}
            alt={profile.name}
            className="avatar"
            />
            <p className="name">{profile.name}</p>
                    <p className="tag">{profile.tag}</p>
                    <p className="location">{profile.location}</p>
        </div>
        <ul className="stats">
            <li>
            <span className="label">Followers</span>
            <span className="quantity">{profile.stats.followers}</span>
            </li>
            <li>
            <span className="label">Views</span>
            <span className="quantity">{profile.stats.views}</span>
            </li>
            <li>
            <span className="label">Likes</span>
            <span className="quantity">{profile.stats.likes}</span>
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

export default ProfilePage

