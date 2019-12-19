import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

function* watcherSaga(){
  yield takeEvery(`SEARCH`, searchGiphySaga);
}


function* searchGiphySaga(action){
  console.log('in SEARCH SAGA');
  try{
    let id = action.payload
    const getResponse = yield axios.get(`/api/category/${id}`);
    console.log('RESPONSE DATA-------------------', getResponse.data);
    yield put({type: `STORE_GIPHY`, payload: getResponse.data});
  }
  catch(error){
    console.log('error in SEARCH', error);
  }
}

const giphyReducer = (state=[], action) => {
  console.log('in giphy reducer');
  if (action.type === 'STORE_GIPHY'){
      return action.payload
  }
  return state;
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    giphyReducer
}),
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
