import React, { forwardRef } from 'react';

const TodoCreate = ({ onSubmit, onChange }, inputRef) => <form onSubmit={ onSubmit }>
  <input ref={ inputRef } type="text" onChange={ onChange } />
  <button type="submit">추가</button>
</form>

export default forwardRef(TodoCreate)
