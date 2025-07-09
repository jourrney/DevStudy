import { Todo } from '../types/todo';
import { useTodoContext } from '../context/TodoContext';

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo } = useTodoContext();

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
    </li>
  );
};
