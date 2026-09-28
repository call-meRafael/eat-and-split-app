
import { Friend } from "./friend";


export const FriendsList = ({ friends, formatBalance }) => {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend friend={friend} formatBalance={formatBalance} key={friend.id}/>
            ))}
        </ul>
    )
}