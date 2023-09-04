import { ToDoItem } from "./ToDoItem";

export default function ToDoList({ ToDos }) {
  return (
      <ul className="list">
        {toDos.length === 0 && "You don't have any tasks"}
        {toDos.map((toDo) => {
          return (
            <ToDoItem
              {...toDo} key={toDo.id}
            />
          );
        })}
      </ul>
  );
}
