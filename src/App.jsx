// import { initialFriends } from "./data";
import { FriendsList } from "./components/friendsList";

export default function App() {
  const formatBalance = (balance) => {
    return balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <FriendsList formatBalance={formatBalance} />

      </aside>
    </div>
  )
}