import { Button } from "./buttonAddFriend";
import { UserAvatar } from "./userAvatar";
import { UserName } from "./user";

export const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend-name">
        <UserName  />Nome do amigo</label>
      <input type="text" name="friend-name" id="iFriend-name" />
      <label htmlFor="friend-image">
        <UserAvatar /> URL da foto{" "}
      </label>
      <input type="text" name="image-url" id="iImage-url" />

      <Button>Adicionar</Button>
    </form>
  );
};
