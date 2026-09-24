import { BillIcon } from "./billIcon";
import { ExpenseIcon } from "./expenses";
import { UserName } from "./user";

export const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Dividir o valor com X</h2>

      <label className="bill-value">
        <BillIcon />
        Total da conta
      </label>

      <input
        type="text"
        name="bill-value"
        id="iBill-value"
        placeholder="valor da conta"
      />

      <label className="bill-value">
        <ExpenseIcon />
        Seu gasto
      </label>
      <input
        type="text"
        name="your-expense"
        id="iExpense-value"
        placeholder="insira seu gasto"
      />

      <label className="bill-value">
        <UserName />X deve pagar
      </label>
      <input
        type="text"
        name="friend-expense"
        id="iFreind-expense"
        placeholder="valor"
        disabled
      />

      <label className="bill-value">Quem está pagando a conta?</label>
      <select name="friend-select" id="iUser-select">
        <option value="user">Você</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
};
