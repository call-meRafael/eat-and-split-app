import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FriendsList } from "./components/friendsList";
import { FormAddFriend } from "./components/formAddFriend";
import { Button } from "./components/buttonAddFriend";
import { FormSplitBill } from "./components/formSplitBill";

export default function App() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

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
      <motion.aside className="sidebar">
        <FriendsList formatBalance={formatBalance} />

        {/* {isOpen && <FormAddFriend />} */}
        {/* 2. Envolva a renderização condicional com AnimatePresence */}
        <AnimatePresence mode="popLayout">
          {isOpen && (
            <motion.div
              key="form-add-friend"
              layout //
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              style={{ overflow: "hidden" }} // Evita bugs visuais enquanto estica/colapsa
            >
              <FormAddFriend />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleClick} className="button-add-friend">
            {isOpen ? "Fechar" : "Adicionar amigo"}
          </Button>
        </motion.div>
      </motion.aside>
      <FormSplitBill />
    </div>
  );
}
