import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "SECTORES" : {
            return {
                ...state,
                sectores: [action.payload],
            }
        }
    }
    return state;
};

export const useGlobalState = props => {

    const initialState = {
        sectores: []
    }

    const [globalState, globalDispatch] = useReducer(reducer, initialState);

    return { globalState, globalDispatch };
};