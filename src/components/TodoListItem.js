import React from 'react';

const TodoItem = ({ id, onRemove, onToggle, children, done }) => (
  <li>
    <span className={ `text ${ done ? 'done' : '' }` } onClick={ () => onToggle(id) }>{ children }</span>
    <span className="remove" onClick={ () => onRemove(id) }>&nbsp;(X)&nbsp;</span>
  </li>
)

export default TodoItem
