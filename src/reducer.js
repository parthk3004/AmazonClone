export const initialState ={
    basket: [], user: null
};

// to get total of basket
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) =>
{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding item
            return {
                ...state,
                basket: [...state.basket, action.item],
              };
        case 'EMPTY_BASKET':
        //if basket is empty
        return {
                  ...state,
                  basket: []
                }
            case 'REMOVE_FROM_BASKET':
                //logic for removing item
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                  );
                  // we clone the basket
                  let newBasket = [...state.basket];
            
                  if (index >= 0) {
                      // if item exist remove it
                    newBasket.splice(index, 1);
            
                  } 
                  else {
                    console.warn(
                      `Cant remove product (id: ${action.id}) as its not in basket!`
                    )
                  }
            // clone of old basket
                  return {
                    ...state,
                    basket: newBasket
                  }

                  case "SET_USER":
                    return {
                      ...state,
                      user: action.user
                    }            
                default:
                    return state;
    }
};
export default reducer;
/*
...state is used so that it came back from any state you are in current
*/