import { useReducer } from 'react';

const reducer = (state, action) => {
    return state;
};

export const useGlobalState = props => {

    const initialState = {
        nVar : true
    }

    const [globalState, globalDispatch] = useReducer(reducer, initialState);

    return { globalState, globalDispatch };
};