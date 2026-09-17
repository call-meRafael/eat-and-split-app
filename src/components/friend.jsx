import { Button } from "./buttonAddFriend";

export const Friend = ({ friend, formatBalance }) => {
  return (
    <li>
      <div className="avatar-box">
        <img src={friend.image} alt={friend.name} />
      </div>
      <div className="firend-info">
        <h3>{friend.name} {friend.lastName}</h3>
        {friend.balance < 0 && (
          <p className="red">
            Você deve {friend.name}: {formatBalance(Math.abs(friend.balance))}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} deve a você: {formatBalance(Math.abs(friend.balance))}
          </p>
        )}
        {friend.balance === 0 && <p>Você e {friend.name} estão quites.</p>}
      </div>
      <Button>Selecionar</Button>
    </li>
  );
};
