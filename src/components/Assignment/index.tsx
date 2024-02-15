import { AssignmentData } from "../../App";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

type Props = {
  assignment: AssignmentData;
  deleteAssignment: (assignment: AssignmentData) => void;
  setIsDone: (assignment: AssignmentData) => void;
}

export function Assignment(props: Props) {
  const assignment = props.assignment;
  const deleteAssignment = props.deleteAssignment;
  const setIsDone = props.setIsDone;
  const showCheckCircle = () => {
    if (assignment.isDone) {
      return (<BsFillCheckCircleFill/>);
    } else {
      return (<div/>);
    }
  }

  const setDescriptionClassName = () => {
    if (assignment.isDone) {
      return styles.textCompleted;
    }
    return undefined;
  }
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick = {() => {setIsDone(assignment)}}>
        {showCheckCircle()}
      </button>

      <p className={setDescriptionClassName()}>{assignment.description}</p>

      <button className={styles.deleteButton} onClick={() => {deleteAssignment(assignment)}}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
