import { useState, useEffect, useRef } from 'react';
import { ITodo } from '../types/data';
import { TodoList } from './TodoList';

export const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const add = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue('');
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') add();
  };

  const changeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const remove = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo;
        
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  return (
    <>
      <div>
        <input
          value={value}
          onChange={changeInput}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button onClick={add}>add</button>
      </div>
      <TodoList items={todos} remove={remove} toggleTodo={toggleTodo} />
    </>
  );
};
