import { Button } from "./buttonAddFriend";
import { UserAvatar } from "./userAvatar";
import { UserName } from "./user";
import { useState } from "react";
// import { img } from "framer-motion/client";

export const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const imageUrl = image ? URL.createObjectURL(image) : "avatar-padrao.webp";

    const newFriend = {
      id: crypto.randomUUID(),
      name: name,
      lastName: "",
      image: imageUrl,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImage(null);
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend-name" id="friend-name">
        <UserName />
        Usuário
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="friend-name"
        id="iFriend-name"
        placeholder="Nome do amigo"
      />

      <label htmlFor="iImage-url">
        <UserAvatar />
        Foto
      </label>

      <div className="img-box">
        <input
          type="file"
          id="iImage-url"
          onChange={handleImageChange}
          accept="image/*"
          className="visually-hidden"
        />
      </div>

      <label htmlFor="iImage-url" className="file-button">
        Escolher arquivo
      </label>

      {image && <img src={URL.createObjectURL(image)} alt={name} />}

      <Button type="submit">Adicionar</Button>
    </form>
  );
};
