import React, { useState, useReducer } from "react";
import "./App.css";

// 액션 타입 정의
type Action =
  | { type: "deposit"; payload: number }
  | { type: "withdraw"; payload: number };

// reducer 함수 정의
// state는 현재 잔고
// reducer(0, { type: "deposit", payload: 2000 });

const reducer = (state: number, action: Action): number => {
  console.log("reducer가 일을 합니다.", state, action);

  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

function App() {
  const [number, setNumber] = useState<number>(0);
  // useReducer(reducer함수, 초기값)
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}

export default App;
