import { createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numerosReducer'

const Reducers = combineReducers({
    numeros: numerosReducer,
})

function storeConfig() {
    return createStore(Reducers)
}

export default storeConfig