import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import './App.css';

import MainPage from './containers/MainPage'

import rootReducer from "./modules";
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const App = () => {

  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route path="/" component={ MainPage } />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
