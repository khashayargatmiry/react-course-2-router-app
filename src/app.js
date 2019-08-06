//import validator from 'validator'
//console.log(validator.isEmail('test'))
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setTextFilter, sortByAmount} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'

const store = configureStore()
console.log('store is ', store.getState())

store.dispatch(addExpense({description: 'Water bill', amount: 5500}))
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 109500}))


/* setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
    store.dispatch(sortByAmount())
}, 3000)
 */
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))


