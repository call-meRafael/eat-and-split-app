import { BillIcon } from "./billIcon";
import { ExpenseIcon } from "./expenses";


export const FormSplitBill =() => {
    return (
        <form className="form-split-bill">
            <h2>Dividir o valor com X</h2>
            <label><BillIcon />Total da conta</label>
            <input type="text" name="bill-value" id="iBill-value" placeholder="valor da conta"/>

            <label><ExpenseIcon />Seu gasto</label>
            <input type="text" name="your-expense" id="iExpense-value" placeholder="insira seu gasto"/>

        </form>
    )
}