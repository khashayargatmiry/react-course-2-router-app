//Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = startDate ? startDate.isSameOrBefore(expense.createdAt, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(expenses.createdAt, 'day') : true
        const descriptionLowerCase = expense.description.toLowerCase()
        const textLowerCase = typeof text !== 'string' ? undefined: text.toLowerCase()
        const textMatch = typeof text !== 'string' || descriptionLowerCase.includes(textLowerCase)
        return startDateMatch && endDateMatch && textMatch
    } ).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        } 
    })
}
