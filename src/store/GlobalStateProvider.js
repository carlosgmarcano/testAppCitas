import React from 'react';
import {Context} from './Context';
import { useGlobalState } from './useGlobalState';


export const GlobalStateProvider = ({ children }) => (
    <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
);