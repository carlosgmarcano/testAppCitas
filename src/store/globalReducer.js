import {
    SECTORES_DISPONIBLES,
    SECTOR_ACTUAL,
    EMPRESAS_DISPONIBLES,
    EMPRESA_ACTUAL,
    AGENCIAS_DISPONIBLES,
    AGENCIA_ACTUAL,
    AREAS_DISPONIBLES,
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from './constants';

export default (state, action) => {
    switch (action.type) {
        case SECTORES_DISPONIBLES:
            return { ...state, sectores: action.payload };
        case SECTOR_ACTUAL:
            return { ...state, sector: action.payload };
        case EMPRESAS_DISPONIBLES:
            return { ...state, empresas: action.payload };
        case EMPRESA_ACTUAL:
            return { ...state, empresa: action.payload };
        case AGENCIAS_DISPONIBLES:
            return { ...state, agencias: action.payload };
        case AGENCIA_ACTUAL:
            return { ...state, agencia: action.payload };
        case AREAS_DISPONIBLES:
            return { ...state, areas: action.payload };
        case MOSTRAR_ALERTA:
            return { alerta: action.payload };
        case OCULTAR_ALERTA:
            return { alerta: null }
        default:
            return state;
    }
};