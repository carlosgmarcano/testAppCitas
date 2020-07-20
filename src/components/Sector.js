import React,  {useContext} from 'react';
import {SectoresContext} from '../context/SectoresContext';
import style from '../style/Style';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Lista from './Lista';

export const Sector = () => {    
    
    const {sectores} = useContext(SectoresContext);


    return ( 
        <Container maxWidth="xs">
            <div style={style.paper}>     
                <Lista items = {sectores}/>
            </div>
        </Container> 
)}

export default Sector;


