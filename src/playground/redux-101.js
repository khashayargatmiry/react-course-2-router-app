import {createStore} from 'redux'


// Action Creators

const incrementCount = (payload = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    }
}

const decrementCount = (payload = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
    }
}

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

const setCount = (payload = {}) => {
    return {
        type: 'SET',
        count: payload.count
    }
}

//Reducers
// Reducers are pure functions
    // 1. output only determines from the input
    // 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('this shit is ', action.incrementBy)
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {count: state.count - action.decrementBy}
        case 'SET':
            const count = typeof action.count === 'number' ? action.count : 0
            return {count: count}
        case 'RESET':
            return {count: 0}
        default:
            return state
    }
}


const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})


store.dispatch(incrementCount({incrementBy: 4}))


store.dispatch(decrementCount({decrementBy: 4}))

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(resetCount())

store.dispatch(setCount({count: 7}))

unsubscribe()


