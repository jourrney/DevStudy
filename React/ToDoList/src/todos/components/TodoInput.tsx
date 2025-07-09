import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

export const TodoInput = () => {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState("");

  // 엔터를 누르면 새 할 일을 추가하고 입력창을 '' 로 비우는 함수
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      ></input>
      <button type="submit">추가</button>
    </form>
  );
};
