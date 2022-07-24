import { getUserApi } from "./Api/user.Api";
import { request_sending, request_success, request_failure } from "./utilities";
import  {USER_GET_TYPES}  from "./user.type";


export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(request_sending(USER_GET_TYPES.GET_REQUEST_SENDING));
    setTimeout(() => {
      getUserApi()
        .then((res) => {
          const users = res.data;
          dispatch(request_success(USER_GET_TYPES.GET_REQUEST_SUCCESS, users));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(request_failure(USER_GET_TYPES.GET_REQUEST_FAILURE, errorMsg));
        });
    }, 1000);
  };
};
