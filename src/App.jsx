import { useState } from "react";
import { FriendsList } from "./components/friendsList";
import { FormAddFriend } from "./components/formAddFriend";
import { Button } from "./components/buttonAddFriend";

export default function App() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  }

  const formatBalance = (balance) => {
    return balance.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <FriendsList formatBalance={formatBalance} />
        {isOpen && <FormAddFriend />}

        <Button onClick={handleClick} className="button-add-friend">
          {isOpen ? "Fechar" : "Adicionar amigo"}
        </Button>
      </aside>
    </div>
  );
}
