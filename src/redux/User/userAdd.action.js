import { addUserApi } from "./Api/user.Api";
import { USER_ADD_TYPES } from "./user.type";
import { request_failure, request_sending, request_success } from "./utilities";

const addUser = (data) => {
  return (dispatch) => {
    dispatch(request_sending(USER_ADD_TYPES.ADD_REQUEST_SENDING));
    addUserApi(data)
      .then((response) => {
        // console.log("res", response);
        dispatch(
          request_success(USER_ADD_TYPES.ADD_REQUEST_SUCCESS, response.data)
        );
      })
      .catch((error) => {
        // console.log(error.message);
        dispatch(
          request_failure(USER_ADD_TYPES.ADD_REQUEST_FAILURE, error.message)
        );
      });
  };
};

export default addUser;
