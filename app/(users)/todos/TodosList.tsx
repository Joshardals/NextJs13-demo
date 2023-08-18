import { Todo } from "@/typings";
import Link from "next/link";
import React from "react";

const fetchToDos = async () => {
  const randomTime = Math.floor(Math.random() * 4000) + 1000;
  await new Promise((resolve) => {
    setTimeout(resolve, randomTime);
  });

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos: Todo[] = await res.json();
  return todos;
};

const TodosList = async () => {
  const todos = await fetchToDos();
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodosList;
