# ✅ ToDoList - React + TypeScript + Context API

하루 할 일을 기록하고 관리할 수 있는 간단한 투두 리스트입니다.  
React + TypeScript + Context API를 활용하여 상태 관리를 전역으로 처리했습니다.

---

## 📌 주요 기술 스택

- **React**  
- **TypeScript**
- **Context API**  
- **Hooks** (`useState`, `useContext`)  
- **Functional Components**

---

## 📁 폴더 구조
```
ToDoList/
├── components/
│   ├── TodoInput.tsx       # 할 일 입력창
│   ├── TodoItem.tsx        # 할 일 항목 컴포넌트
│   └── TodoList.tsx        # 전체 할 일 목록
│
├── context/
│   └── TodoContext.tsx     # Context 정의 및 Provider
│
├── types/
│   └── todo.ts             # Todo 타입 정의
│
├── index.tsx               # ToDoList 루트 컴포넌트
└── App.css                 # 스타일링
```


---

## 💡 주요 기능

- 할 일 추가
- 할 일 완료 표시 (취소선으로 표시)
- Context를 통한 전역 상태 관리
- 타입 안전한 컴포넌트 설계

---

## 🎯 학습 포인트

- Props로 상태를 전달하는 구조 vs Context 구조 비교
- 컴포넌트 분리와 타입 정의
- Context의 `createContext`, `useContext`, Provider 흐름

---

## ✨ 화면 예시

![ToDo List Screenshot](https://velog.velcdn.com/images/juyeoonni/post/317c09c6-e38f-43e0-bd66-fe573578f83f/image.png)

---
