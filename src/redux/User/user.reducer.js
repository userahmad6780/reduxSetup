import { USER_GET_TYPES, USER_ADD_TYPES } from "./user.type";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: "",

  addLoading: false,
  addData: "",
  addError: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_GET_TYPES.GET_REQUEST_SENDING:
      return {
        ...state,
        loading: true,
      };
    case USER_GET_TYPES.GET_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case USER_GET_TYPES.GET_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    case USER_ADD_TYPES.ADD_REQUEST_SENDING:
      return {
        ...state,
        addLoading: true,
      };
    case USER_ADD_TYPES.ADD_REQUEST_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addData: action.payload,
        addError: "",
      };
    case USER_ADD_TYPES.ADD_REQUEST_FAILURE:
      return {
        ...state,
        addLoading: false,
        addData: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
