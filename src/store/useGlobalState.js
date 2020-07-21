import { useReducer } from 'react';
import { SECTORES_DISONIBLES } from './constants';

const reducer = (state, action) => {
  switch (action.type) {
    case SECTORES_DISONIBLES:
      return { ...state, sectores: action.payload };
    default:
      return state;
  }
};

export const useGlobalState = () => {
  const initialState = {
    sectores: null,
  };

  const [globalState, globalDispatch] = useReducer(reducer, initialState);

  return { globalState, globalDispatch };
};
