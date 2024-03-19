

import axios from "axios";

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8000/user/registration', userData);
      console.log(response.data);
      alert("Successfully Registered!!!");
      dispatch(registerSuccess());
    } catch(error) {
      console.log(error);
      alert("Registration Failed!!, Please try again");
      dispatch(registerFailure());
    }
  };
};

const registerSuccess = () => ({
  type: 'REGISTER_SUCCESS'
});

const registerFailure = () => ({
  type: 'REGISTER_FAILURE'
});
