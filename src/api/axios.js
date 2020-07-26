import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://laqyikviquuztop-devcolasvip.adb.us-ashburn-1.oraclecloudapps.com/ords/cv_developer/reserva'
});

export default clienteAxios;