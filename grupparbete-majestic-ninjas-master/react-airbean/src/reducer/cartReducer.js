let initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':

        //lägger ihop den nuvarande arrayen med det objektet som används som action.payload
            return {
                cart: state.cart.concat(action.payload)
            }
        case 'REMOVE_ITEM':
            // ger tillbaka en ny array utan objektet som används som action.payload
            return {
                cart: state.cart.filter(item => item !== action.payload)

            }
        case 'UPDATE':

        // updaterar statet med antingen ett nytt objekt eller bara öka egenskapen qty med 1 ifall objektet redan finns i arrayen.
            return {
                ...state,
                cart: state.cart.map(item => {
                    if(item.id !== action.payload.id){
                        return item;
                    }
                    return {
                        ...item,
                        qty: item.qty += 1
                    }
                })
            }
        default:
            return state;
    }
}

export default cartReducer;

// state.cart.filter(item => item !== action.payload)
// let index = state.cart.findIndex(element => element === action.payload)