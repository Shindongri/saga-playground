import { all, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'

import { FETCH_TODOS } from '../modules/todos'

const fetchTodos = function* () {
  const response = yield call(() => axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=aedad98849168d43fe2c45f64391fc65&language=en-US'))

  console.log(response)
}

export default function* todosSaga () {
  yield all([
    takeEvery([FETCH_TODOS], fetchTodos)
  ])
}
