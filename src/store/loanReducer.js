const initialState = {
    loanApplied: false
}
function LoanReducer(state = initialState, action) {
    switch (action.type) {
        case "APPLY":
            return { loanApplied: true}
        default: return state
    }
}
export default LoanReducer