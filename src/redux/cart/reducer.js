const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
  };

const addItemToCart = (cartItems, cartItemToAdd) => {
    const existing = cartItems.find(
      (cartItem) => cartItem.id === cartItemToAdd.id
    );
  
    if (existing) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existing = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existing.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
        case "ADD_ITEM":
          return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
          };
        case "REMOVE_ITEM":
          return{
            ...state,
            cartItems:removeItemFromCart(state.cartItems,action.payload)
          }
        case "CLEAR_ITEM_FROM_CART":
          return{
            ...state,
            cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
          }
        default:
          return state;
      }
}

export default reducer