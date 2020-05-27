import React, {useCallback, useRef, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {REMOVE_TODO, TOGGLE_TODO, SET_TODO, SET_TODOS, FETCH_TODOS} from "../modules/todos";

import {TodoCreate, TodoList} from "../components";

const MainPage = () => {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const { todo, todos } = useSelector(state => state.todos )

  const onSubmit = useCallback((e) => {
    e.preventDefault()

    dispatch({ type: SET_TODOS, payload: todo })
    dispatch({ type: SET_TODO, payload: '' })

    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.value = ''
    }
  }, [dispatch, todo])

  const onChange = useCallback((e) => {
    dispatch({ type: SET_TODO, payload: e.target.value })
  }, [dispatch])

  const onToggle = useCallback((id) => {
    dispatch({ type: TOGGLE_TODO, payload: id })
  }, [dispatch])

  const onRemove = useCallback((id) => {
    dispatch({ type: REMOVE_TODO, payload: id })
  }, [dispatch])

  useEffect(() => {
    dispatch({ type: FETCH_TODOS })
  }, [])

  return (
    <div>
      <TodoCreate ref={ inputRef } onSubmit={ onSubmit } onChange={ onChange } />
      <TodoList todos={ todos } onToggle={ onToggle } onRemove={ onRemove } />
    </div>
  )
}

export default MainPage
