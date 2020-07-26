import React, { useReducer } from 'react';
import GlobalReducer from './globalReducer';
import { Context } from './context';
import clienteAxios from '../api/axios'
import axios from 'axios'


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
import Axios from 'axios';

const GlobalState = props => {

    const initialState = {
        alerta: null,
        sectores: null,
        sector: null,
        empresas: [
            {
                ID_SECTOR: 1,
                ID_PARTNER: 1,
                NAME: 'Las Pulguitas - Javier Prado',
                PICTURE_NAME: 'PICT01'
            },
            {
                ID_SECTOR: 1,
                ID_PARTNER: 2,
                NAME: 'Las Pulguitas - San Borja Norte',
                PICTURE_NAME: 'PICT02'
            },
        ],
        empresa: null,
        agencias: [
            {
                ID_SECTOR: 1,
                ID_PARTNER: 1,
                ID_AGENCIA: 1,
                NAME: 'Las Pulguitas - Javier Prado',
            },
            {
                ID_SECTOR: 1,
                ID_PARTNER: 1,
                ID_AGENCIA: 2,
                NAME: 'Las Pulguitas - San Borja Norte',
            },
            {
                ID_SECTOR: 1,
                ID_PARTNER: 1,
                ID_AGENCIA: 3,
                NAME: 'BANBIF Jockey',
            },
            {
                ID_SECTOR: 1,
                ID_PARTNER: 2,
                ID_AGENCIA: 4,
                NAME: 'Constructores 3',
            },
            {
                ID_SECTOR: 1,
                ID_PARTNER: 2,
                ID_AGENCIA: 5,
                NAME: 'La Pagoda La Victoria',
            },
        ],
        agencia: null,
        areas: null
    };


    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    //Alerta
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });
        //Despues de 5 seg limpiar el alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 3000)
    }
    //SECTORES
    const sectoresDisponibles = async () => {
        try {
            const URL = 'https://laqyikviquuztop-devcolasvip.adb.us-ashburn-1.oraclecloudapps.com/ords/cv_developer/reserva/Busca_sector'
            const resultado = await axios.get(URL)//clienteAxios.get('/Busca_sector');
            dispatch({
                type: SECTORES_DISPONIBLES,
                payload: resultado.data.P_SECTOR
            })
        } catch (error) {
            console.log(error);
        }
    }

    const sectorActual = sector => {
        dispatch({
            type: SECTOR_ACTUAL,
            payload: sector
        })
    }
    //EMPRESAS
    const empresaActual = empresa => {
        dispatch({
            type: EMPRESA_ACTUAL,
            payload: empresa
        })
    }

    return (
        <Context.Provider
            value={{
                sectores: state.sectores,
                alerta: state.alerta,
                empresa: state.empresa,
                sector: state.sector,
                mostrarAlerta,
                sectoresDisponibles,
                sectorActual,
                empresaActual
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default GlobalState;