import React from 'react';
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, onRemove, onToggle }) => <ul>
  {
    todos.map(({ text, id, done }) => <TodoListItem key={ id } id={id} done={ done } onToggle={ onToggle } onRemove={ onRemove }>{ text }</TodoListItem>)
  }
</ul>

export default TodoList
