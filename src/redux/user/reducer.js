const initialState = {
    registering: false,
    error: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          registering: true,
          error: null
        };
      case 'REGISTER_FAILURE':
        return {
          ...state,
          registering: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  