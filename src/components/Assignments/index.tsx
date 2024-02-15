import { AssignmentData } from "../../App";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assigments: AssignmentData[];
  setAssignments: (assignments: AssignmentData[]) => void;
}

export function Assignments(props: Props) {
  const assignments = props.assigments;
  const setAssignments = props.setAssignments;

  const deleteAssignment = (assignment: AssignmentData) => {
    var i = assignments.length;
    const copyAssignment = Array.from(assignments);
    while(i--){
       if( copyAssignment[i] 
           && copyAssignment[i].description === assignment.description){ 
            copyAssignment.splice(i,1);
            setAssignments(copyAssignment);
            break;
       }
    }
  } 

  const setIsDone= (assignment: AssignmentData) => {
    var i = assignments.length;
    const copyAssignment = Array.from(assignments);
    while(i--){
       if( copyAssignment[i] 
           && copyAssignment[i].description === assignment.description){ 
            copyAssignment[i].isDone = !copyAssignment[i].isDone;
            setAssignments(copyAssignment);
            break;
           }
      }
  }

  const showAssignments = () => {
    if (assignments != null) {
      return (
      assignments.map((assignment, key) => 
        <Assignment assignment={assignment} deleteAssignment={deleteAssignment} setIsDone={setIsDone} key={key}/>
      )
      )
    }
  }

  const countDoneAssignments = () => {
    let count = 0;
    if (assignments != null) {
      assignments.forEach(assignment => {
        if (assignment.isDone) {
          count++;
        }
      })
    } 
    return count;
  }
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments == null ? 0 : assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{countDoneAssignments()} of {assignments == null ? 0 : assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {showAssignments()}
      </div>
    </section>
  );
}
