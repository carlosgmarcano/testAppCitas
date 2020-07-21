import React,  {useContext} from 'react';
import {Context} from "../store/Context"
import style from '../style/Style';
import { Container } from '@material-ui/core';
import Lista from './Lista';

export const Home = () => {    
    
    const {globalState, globalDispatch} = useContext(Context)

    const getSectores = async () => {
        try {
            const URL = `https://laqyikviquuztop-devcolasvip.adb.us-ashburn-1.oraclecloudapps.com/ords/cv_developer/reserva/sector`
            const data = await fetch(URL);
            const resultado = await data.json();
            //console.log(resultado.cur_sector);
            globalDispatch({
                type: "SECTORES",
                payload: resultado.cur_sector
            });
        } catch (error) {
            console.log(error)
        }
    }
    getSectores();

    const {sectores} = globalState;
    
    return ( 
        <Container maxWidth="xs">
            <div style={style.paper}>     
                <Lista items = {sectores}/>
            </div>
        </Container> 
)}

export default Home;