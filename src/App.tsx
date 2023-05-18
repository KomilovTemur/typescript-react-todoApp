import { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    if (task === "") {
      return setError("Task is required");
    } else if (deadline < 0) {
      return setError("As long as time is greater than 0");
    }
    const newTask = { taskName: task, deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
    setError(null);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      {error && (
        <div className="errorDialog">
          <p className="dialog">{error}</p>
          <button onClick={() => setError(null)} className="closeErrorDialog">
            X
          </button>
        </div>
      )}
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.length == 0
          ? "there is no tasks yet"
          : todoList.map((task: ITask, key: number) => (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            ))}
      </div>
    </div>
  );
};

export default App;
