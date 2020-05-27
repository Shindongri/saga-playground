export const SET_TODO = 'SET_TODO';
export const SET_TODOS = 'SET_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';

const initialState = {
  todo: '',
  todos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO: {
      return {
        ...state,
        todo: action.payload
      }
    }
    case SET_TODOS: {
      return {
        ...state,
        todos: [...state.todos, {
          id: state.todos.length + 1,
          text: action.payload,
          done: false
        }]
      }
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo)
      }
    }
    default: return state
  }
}

export default reducer
