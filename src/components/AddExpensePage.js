import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import {addExpense} from '../actions/expenses'
import { AST_PropAccess } from 'terser';

const AddExpensePage = ({ dispatch, history }) => (
    <div>
        <h1>This is from my add expence change!</h1>
        <ExpenseForm 
        onSubmit={(expense) => {
            dispatch(addExpense(expense))
            history.push('/')
        }}/>
    </div>
)

export default connect()(AddExpensePage)