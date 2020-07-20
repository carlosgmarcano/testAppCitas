import React from 'react';
import { Context, useGlobalState } from './';

export const GlobalStateProvider = ({ children }) => (
  <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
);
