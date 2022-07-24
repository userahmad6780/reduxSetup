import { INCREMENT, DECREMENT } from "./counter.types";

export const increaseCounter = (number) => {
console.log("🚀 ~ file: counter.actions.js ~ line 4 ~ increaseCounter ~ number", number)
  return {
    type: INCREMENT,
    payload : number
  };
};

export const decreaseCounter = (number) => {
  return {
    type: DECREMENT,
    payload: number
  };
};
