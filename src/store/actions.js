import { SECTORES_DISONIBLES } from './constants';

export const sectoresDisponibles = (sectores) => ({
  type: SECTORES_DISONIBLES,
  payload: sectores,
});
