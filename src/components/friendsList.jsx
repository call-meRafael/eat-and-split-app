import { initialFriends } from "../data";
import { Friend } from "./friend";

export const FriendsList = ({ formatBalance }) => {
    const friends = initialFriends;
    return (
        <ul>
            {friends.map((friend) => (
                <Friend friend={friend} formatBalance={formatBalance} key={friend.id}/>
            ))}
        </ul>
    )
}