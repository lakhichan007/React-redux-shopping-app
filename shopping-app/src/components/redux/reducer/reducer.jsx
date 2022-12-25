
const initialState={
    products:[]
}
export const productReducer =(state=initialState,action)=>{

switch(action.type){
    case "SET_PRODUCTS":
        return{
            ...state,products:action.payload
        }  
    default:return state    
}
}

export const selecteProductReducer =(state={},action)=>{

    switch(action.type){
        case "SELECTED_PRODUCT":
            return{
                ...state,...action.payload
            }  
        default:return state    
    }
    }