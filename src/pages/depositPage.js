import React from "react";
import { useSelector,useDispatch } from "react-redux";

function DepositPage(){
    const dispatch = useDispatch();
    const balance = useSelector(state=>state.BalanceReducer.balance)

    const onDepositHandler=()=>{
        dispatch(
            {
                type:"DEPOSIT",
                payload:10
            }
        )
    }

    return <div>
        <h1>Balance: {balance}</h1>
        <button className="button-style" onClick={onDepositHandler}>Deposit</button>
    </div>
}
export default DepositPage;