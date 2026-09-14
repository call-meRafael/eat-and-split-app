import { Button } from "./buttonAddFriend";

export const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend-name">Nome do amigo</label>
      <input type="text" name="friend-name" id="iFriend-name" />
      <label htmlFor="friend-image"> URL da foto</label>
      <input type="text" name="image-url" id="iImage-url" />
      <Button>Adicionar</Button>
    </form>
  );
};
