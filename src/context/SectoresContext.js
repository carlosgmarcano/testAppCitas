import React, {createContext, useState} from 'react';

export const SectoresContext = createContext();

const SectoresProvider = (props) => {

    const [sectores, setSectores] = useState([]);


        const getSectores = async () => {
                const URL = `https://laqyikviquuztop-devcolasvip.adb.us-ashburn-1.oraclecloudapps.com/ords/cv_developer/reserva/sector`
                const data = await fetch(URL);
                const resultado = await data.json();
                //console.log(resultado.cur_sector);
                setSectores(resultado.cur_sector);
            }
            getSectores();
    
    return ( 
        <SectoresContext.Provider
            value= {{
                sectores,
            }}
        >
            {props.children}
        </SectoresContext.Provider>
     );
}
 
export default SectoresProvider;