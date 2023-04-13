// import PropTypes from 'prop-types';
const Profile = (props) => {
    const infoProfile = [
        {
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
}

    ]
    return <section>
            {infoProfile.map((Profile) => {
                return <div>
                        <div>
                            <img src={Profile.avatar} alt="User avatar" width="100" />
                            <p>{Profile.username}</p>
                            <p>{Profile.tag}</p>
                            <p>{Profile.location}</p>
                    
                        <ul>
                            <li>
                                <span>followers</span>
                                <span>{Profile.stats.followers}</span>
                            </li>
                            <li>
                                <span>views</span>
                                <span>{Profile.stats.views}</span>
                            </li>
                            <li>
                                <span>likes</span>
                                <span>{Profile.stats.likes}</span>
                            </li>
                        </ul>
                </div>
           
                </div>
                 })
            }
    </section>
}
export default Profile;




// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
// }