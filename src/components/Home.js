import React,  {useContext} from 'react';
import SectoresContext from './context/SectoresContext';
import style from '../style/Style';
import { Container } from '@material-ui/core';
import Lista from './Lista';

export const Home = () => {    
    
    const {sectores} = useContext(SectoresContext);


    return ( 
        <Container maxWidth="xs">
            <div style={style.paper}>     
                <h1>Hola</h1>
                
            </div>
        </Container> 
)}

export default Home;