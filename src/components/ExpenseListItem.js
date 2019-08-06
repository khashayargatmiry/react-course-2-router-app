import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeExpense} from '../actions/expenses'


const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>amount: {amount} - createdAt: {createdAt}</p>
    </div>
)

const mapStateToProps = (state) => {
    return {}
} 

export default connect(mapStateToProps)(ExpenseListItem)