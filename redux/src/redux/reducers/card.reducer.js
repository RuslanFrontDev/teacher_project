


const initialState = {
    cart: []
}

export const cardReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            const existingId = state.cart.find((item) => item.id === action.payload.id);
            if (existingId) {
              const getNonExistingProducts = state.cart.filter((item) => {
                return item.id !== existingId.id;
              });
              return {
                cart: [
                  ...getNonExistingProducts,
                  { ...existingId, quantity: existingId.quantity + 1 },
                ],
              };
            } else {
              return {
                cart: [...state.cart, {...action.payload , quantity: 1}],
              };
            }
            case 'DELETE_CART': {
                const filteredData = state.cart.filter(
                    (item) => item.id !== action.payload
                  );
                  return {
                    cart: [...filteredData],
                  };
            }
            default: 
            return state
    }  
}