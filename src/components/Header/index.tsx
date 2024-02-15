import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type Props = {
  newAssignemnt: string;
  setNewAssignment: (assignment: string) => void;
  addNewAssignmentOnClick: () => void;
}

export function Header(props: Props) {
  const newAssignment = props.newAssignemnt;
  const setNewAssignment = props.setNewAssignment;
  const addNewAssignmentOnClick = props.addNewAssignmentOnClick;
  const buttonDisabled = (newAssignment == null) || newAssignment.trim()==="";
  const setButtonStyle = () => {
    if (buttonDisabled) {
      return styles.notAllowed;
    }
    return undefined;
  }
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" value={newAssignment} onChange={e => setNewAssignment(e.target.value)} />
        <button disabled={buttonDisabled} onClick={() => addNewAssignmentOnClick()} className={setButtonStyle()}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
