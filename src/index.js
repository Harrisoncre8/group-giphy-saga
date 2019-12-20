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
  yield takeEvery(`GET_FAVORITE`, getFavoriteSaga);
  yield takeEvery(`SEARCH`, searchGiphySaga);
  yield takeEvery(`ADD_FAVORITE`, postFavoriteToServer);
}

function* postFavoriteToServer(action){
  try{
    console.log('In POST FAV SAGA with action:', action.payload);
    yield axios.post(`/api/favorite`, action.payload);
    yield put( { type: 'GET_FAVORITE'} );
  }
  catch (error) {
    console.log('error in Favorite GET', error);
  }
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
      return action.payload;
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

const setFavUrlReducer = (state=[], action) => {
  if(action.type === `SET_FAV_URL`){
    return action.payload;
  }
  return state;
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    giphyReducer,
    favoriteReducer,
    setFavUrlReducer
}),
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));