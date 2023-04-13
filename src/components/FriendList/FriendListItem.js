const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <li>
            <span>{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
     </li>
     
     
        )
}
export default FriendListItem;