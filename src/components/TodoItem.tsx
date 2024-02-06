import React from 'react';
import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  remove: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItem> = props => {
  const { id, title, complete, toggleTodo, remove } = props;

  return (
    <>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <span
        style={{
          display: 'inline-block',
          margin: '10px',
        }}
      >
        {title}
      </span>
      <button
        onClick={() => remove(id)}
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'red',
        }}
      >
        x
      </button>
    </>
  );
};
