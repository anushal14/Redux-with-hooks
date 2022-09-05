import React from "react";
import { useSelector,useDispatch } from "react-redux";

function HomePage(){
    const balance = useSelector(state=>state.BalanceReducer.balance)
    const loan = useSelector(state=>state.LoanReducer.loanApplied)
    const dispatch = useDispatch();
    const applyLoan=()=>{
        dispatch({
            type:"APPLY"
        })
    }
    return<div>
        <h1>Balance: {balance}</h1>
        <h1>{loan?"Loan Applied":"Loan Needed"}</h1>
        <button className="button-style" disabled={loan?true:false} onClick={applyLoan}>{loan?"Loan Applied":"Apply for Loan"}</button>
    </div> 
}
export default HomePage;