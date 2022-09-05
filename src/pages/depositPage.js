import React from "react";
import { useSelector,useDispatch } from "react-redux";
import * as balanceActions from '../actions/balanceActions'

function DepositPage(){
    const dispatch = useDispatch();
    const balance = useSelector(state=>state.BalanceReducer.balance)
    const loading = useSelector(state=>state.BalanceReducer.loading)

    const onDepositHandler=()=>{
        dispatch(balanceActions.depositAsync())
    }

    return <div>
        {loading?<h1>Loading...</h1>:<h1>Balance: {balance}</h1>}
        
        <button className="button-style" onClick={onDepositHandler}>Deposit</button>
    </div>
}
export default DepositPage;