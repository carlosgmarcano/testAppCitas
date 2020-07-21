import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "SECTORES" : {
            return {
                sectores: action.payload,
            }
        }
        case "EMPRESAS" : {
            return 
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