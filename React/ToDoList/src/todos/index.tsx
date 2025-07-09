import { TodoProvider } from './context/TodoContext';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

const TodoApp = () => {
  return (
    <TodoProvider>
      <h1>📝 To Do List</h1>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
};

export default TodoApp;
