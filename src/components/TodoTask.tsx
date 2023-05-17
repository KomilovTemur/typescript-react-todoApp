import { ITask } from "../Interfaces";

interface Props {
  task?: ITask;
  completeTask(taskNameToDelete: string | undefined): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task?.taskName}</span>
        <span>{task?.deadline}</span>
      </div>
      <button onClick={() => completeTask(task?.taskName)}>X</button>
    </div>
  );
};

export default TodoTask;
