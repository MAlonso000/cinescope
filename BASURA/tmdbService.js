// import api from './api';

// /**
//  * Obtiene la lista de películas populares usando la instancia de Axios.
//  * @returns {Promise<Array>} Un array con los resultados de las películas.
//  */
// export async function fetchPopularMovies() {
//     try {
//         // La instancia 'api' ya tiene la URL base, el token y el idioma configurados.
//         const response = await api.get('/movie/popular');

//         // Axios pone la respuesta en el objeto 'data'
//         return response.data.results;

//     } catch (error) {
//         // Axios maneja los errores HTTP y los encapsula en 'error.response'
//         console.error("Error al obtener películas populares:", error.response || error.message);
//         throw new Error('Fallo en la carga de datos de TMDB. Revisa el token o la conexión.');
//     }
// }

// /**
//  * Obtiene los detalles de una película específica.
//  * @param {number} movieId - ID de la película.
//  * @returns {Promise<Object>} Detalles de la película.
//  */
// export async function fetchMovieDetails(movieId) {
//     try {
//         const response = await api.get(`/movie/${movieId}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error al obtener detalles de la película:", error.response || error.message);
//         throw new Error('Fallo en la carga de datos de TMDB. Revisa el token o la conexión.');
//     }
// }

// /**
//  * Busca películas por nombre o título.
//  * @param {string} query - Texto de búsqueda.
//  * @returns {Promise<Array>} Un array con los resultados de las películas.
//  */
// export async function searchMovies(query) {
//     try {
//         const response = await api.get(`/search/movie?query=${query}`);
//         return response.data.results;
//     } catch (error) {
//         console.error("Error al buscar películas:", error.response || error.message);
//         throw new Error('Fallo en la búsqueda de películas. Revisa el token o la conexión.');
//     }
// }