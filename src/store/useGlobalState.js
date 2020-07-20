import { useReducer } from 'react';

const reducer = (state, action) => {
  return state;
};

export const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {});

  return { globalState, globalDispatch };
};
