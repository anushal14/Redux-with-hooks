import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import * as balanceActions from '../actions/balanceActions'

function WithdrawPage(){
    const balance = useSelector(state=>state.BalanceReducer.balance)
    const loading = useSelector(state=>state.BalanceReducer.loading)
    const dispatch = useDispatch()
    const onWithdrawHandler = () =>{
        dispatch(balanceActions.withdrawAsync())
    }
    return (
    <div>
        {loading?<h1>Loading...</h1>:<h1>Balance: {balance}</h1>}
        <button className="button-style" onClick={onWithdrawHandler}>Withdraw</button>
    </div>)
    
}
export default WithdrawPage;