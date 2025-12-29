import axios from 'axios';

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const READ_ACCESS_TOKEN = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

// 2. Crear una instancia de Axios (un cliente)
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        // 3. Autenticación con el Token de Acceso
        Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    },
    // 4. Parámetros por defecto para la mayoría de las peticiones
    params: {
        language: 'es-ES',
    },
});

export default api;