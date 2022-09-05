export function deposit(){
    return{
        type:"DEPOSIT",
        payload:10
    }
}

export function depositAsync(){

    return dispatch =>{
        dispatch(Loading())
        setTimeout(()=>{
            dispatch(deposit())
        },5000)
    }
}

export function Loading(){
    return{
        type:"LOADING"
    }
}

export function withdraw(){
    return{
        type:"WITHDRAW",
        payload:10
    }
}

export function withdrawAsync(){
    return dispatch =>{
        dispatch(Loading())
        setTimeout(()=>{
            dispatch(withdraw())
        },5000)
    }
}