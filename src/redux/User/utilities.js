
const request_sending = (actionType) => {
  return { type: actionType };
};

const request_success = (actionType,response) => {
  return { type: actionType, payload: response };
};

const request_failure = (actionType,error) => {
  return { type: actionType, payload: error };
};

export { request_sending, request_success, request_failure };
