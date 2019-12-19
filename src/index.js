import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

function* watcherSaga(){
  yield takeEvery(`GET_GIPHY`, getGiphySaga);
  yield takeEvery(`GET_FAVORITE`, getFavoriteSaga);
}


function* getGiphySaga(){
  console.log('in GET');
  try{
    const getResponse = yield axios.get(`/api/category`);
    yield put({type: `STORE_GIPHY`, payload: getResponse.data});
  }
  catch(error){
    console.log('error in GET', error);
  }
}

function* getFavoriteSaga() {
    try{
        const getResponse = yield axios.get(`/api/favorite`);
        yield put( { type: 'SET_FAVORITE', payload: getResponse.data } );
    }
    catch (error) {
        console.log('error in Favorite GET', error);
    }
}

const giphyReducer = (state=[], action) => {
  if (action.type === 'STORE_GIPHY'){
      return action.payload
  }
  return state;
}

// favorite reducer
const favoriteReducer = (state = [], action) => {
    if (action.type === 'SET_FAVORITE') {
        return action.payload;
    }
    return state;
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    giphyReducer,
    favoriteReducer
}),
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


