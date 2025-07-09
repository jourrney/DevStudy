import { useTodoContext } from "../context/TodoContext";
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
