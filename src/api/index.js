import axios from 'axios';

export const fetchSectores = () => {
  return axios.get(
    'https://laqyikviquuztop-devcolasvip.adb.us-ashburn-1.oraclecloudapps.com/ords/cv_developer/reserva/sector'
  );
};
