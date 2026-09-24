import { Button } from "./buttonAddFriend";
import { UserAvatar } from "./userAvatar";
import { UserName } from "./user";
import { useState } from "react";
// import { img } from "framer-motion/client";

export const FormAddFriend = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-add-friend">
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
      <label htmlFor="friend-image" id="friend-image">
        <UserAvatar /> Foto{" "}
      </label>
      <input
        type="file"
        onChange={handleImageChange}
        name="image-url"
        id="iImage-url"
        accept="image/*"
      />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt={name}
        />
      )}

      <Button onClick={handleSubmit}>Adicionar</Button>
    </form>
  );
};
