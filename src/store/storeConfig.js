import { createStore, combineReducers } from 'redux'

const Reducers = combineReducers({
    numeros: function(state, action) {
        return {
            min: 1,
            max: 100
        }
    }, 
    nomes: function(state, action) {
        return ['ABC', 'DEF', 'XYZ']
    }
})

function storeConfig() {
    return createStore(Reducers)
}

export default storeConfig