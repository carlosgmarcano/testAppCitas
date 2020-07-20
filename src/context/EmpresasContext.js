import React, { createContext, useState } from 'react';
import axios from 'axios';

export const EmpresasContext = createContext();

const EmpresasProvider = (props) => {
  const [Empresas, setEmpresas] = useState([]);

  //const {nombre, categoria} = buscarEmpresas;

  const getEmpresas = async () => {
    const URL = `https://laqyikviquuztop-devcolasvip.adb.us-ashburn-1.oraclecloudapps.com/ords/cv_developer/reserva/sector/empresa/{P_ID_SECTOR}`;
    const data = await fetch(URL);
    const resultado = await data.json();
    //console.log(resultado.cur_sector);
    setEmpresas(resultado.cur_sector);
  };
  getEmpresas();

  return (
    <EmpresasContext.Provider
      value={{
        Empresas,
      }}
    >
      {props.children}
    </EmpresasContext.Provider>
  );
};

export default EmpresasProvider;
