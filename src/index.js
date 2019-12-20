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
  yield takeEvery(`SORT_FAVORITE`, sortFavoriteSaga)
}

// Saga that search category in giphy
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

// Saga that gets all the favorited images
function* getFavoriteSaga() {
    try{    
        const getResponse = yield axios.get(`/api/favorite`);
        yield put( { type: 'SET_FAVORITE', payload: getResponse.data } );
    }
    catch (error) {
        console.log('error in Favorite GET', error);
    }
}

// Saga that sorts the favorited images
function* sortFavoriteSaga(action) {
    let id = action.payload
    try{
        const getResponse = yield axios.get(`/api/favorite/${id}`);
    }
    catch (error){
        console.log('error in Favorite SORT', error);
        
    }
}

const giphyReducer = (state=[], action) => {
  console.log('in giphy reducer');
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


