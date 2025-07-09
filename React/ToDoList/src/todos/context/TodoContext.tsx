// context 폴더의 TodoContext 파일
// 모든 상태를 담고 전역으로 공유하는 저장소

import { createContext, useContext, useState } from "react";
import { Todo } from "../types/todo";

// 1. Context가 제공할 데이터의 구조 정의
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
}

// 2. Context 생성 
// 데이터를 넘길 공간을 만드는 과정으로 
// 나중에 .provider를 통해 실 값을 줌
const TodoContext = createContext<TodoContextType | null>(null);

// 3. 훅 정의 -> 다른 폴더에서 이 변수명으로 상태를 가져올 수 있음 
export const useTodoContext = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return ctx; 
};

// 4. 프로바이더 컴포넌트
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
