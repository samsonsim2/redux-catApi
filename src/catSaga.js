import {call,put,takeEvery} from 'redux-saga/effects'
import { getCatsSuccess } from './catState';

//call = fetch, 
//put is used to call actions , and takeEvery
// takeEvery is to link an action from the reducer to the saga function you are writing 
// yield = async await 
function* workGetCatsFetch(){
    const cats = yield call(()=>fetch('https://api.thecatapi.com/v1/breeds'))
    const formattedCats = yield cats.json();
    const formattedCatsShortened = formattedCats.slice(0,10)
     
  

    yield put(getCatsSuccess(formattedCatsShortened))
}
function* catSaga(){
    // cats refers to cats:catsReducer in the store, and getCatsFetch is the action 
    yield takeEvery('cats/getCatsFetch',workGetCatsFetch)
}

export default catSaga 