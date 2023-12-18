import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import ExpenseDetails from "../ExpenseDetails";
import Card from "../../UI/Card";

const ExpenseItem = (props) => {
  const deleteHandler = (id) => {
    const result = window.confirm("Are you Sure?");
    result && props.delete(id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} amount={props.amount} />
        <button
          className="expense-item__delete"
          onClick={() => deleteHandler(props.id)}
        >
          X
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
