import React from 'react';
import { TodoItem } from './TodoItem';
import { ITodo } from '../types/data';

interface ITodoListProps {
  items: ITodo[];
  remove: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoListProps> = props => {
  const { items, remove, toggleTodo } = props;
  return (
    <>
      {items.map(todo => (
        <TodoItem key={todo.id} remove={remove}  toggleTodo={toggleTodo} {...todo} />
      ))}
    </>
  );
};
