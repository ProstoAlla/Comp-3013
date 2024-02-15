import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

export type AssignmentData = {
  description: string;
  isDone: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<AssignmentData[]>([]);
  const [newAssignment, setNewAssignment] = useState("") ;

  const addNewAssignmentOnClick = () => {
    const assignmentToAdd: AssignmentData = {description: newAssignment, isDone:false };
    assignments.push(assignmentToAdd);
    setAssignments(assignments);
    setNewAssignment("");
  }

  return (
    <>
      <Header newAssignemnt={newAssignment} setNewAssignment={setNewAssignment} addNewAssignmentOnClick={addNewAssignmentOnClick}/>
      <Assignments assigments={assignments} setAssignments={setAssignments}/>
    </>
  );
}

export default App;
