import { Button } from "./buttonAddFriend";
import { UserAvatar } from "./userAvatar";
import { UserName } from "./user";

export const FormAddFriend = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="form-add-friend">
      <label htmlFor="friend-name" id="friend-name">
        <UserName  />Usuário</label>
      <input type="text" name="friend-name" id="iFriend-name" placeholder="Nome do amigo"/>
      <label htmlFor="friend-image" id="friend-image">
        <UserAvatar /> Foto{" "}
      </label>
      <input type="text" name="image-url" id="iImage-url" placeholder="URL da foto"/>

      <Button onClick={handleSubmit}>Adicionar</Button>
    </form>
  );
};
