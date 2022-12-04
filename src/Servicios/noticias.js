/*https://newsapi.org/v2/everything?q=bitcoin&apiKey=25678b0657b94046b6dd9b5d9548d49f&page
=1&pageSize=10&language=es*/
const NEWSAPI = 'https://newsapi.org/v2/everything'
const API_KEY = '25678b0657b94046b6dd9b5d9548d49f'
const LENGUA = 'es'

export const getListadoNoticias = async (criterioBusqueda) => {
    const respuesta = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=25678b0657b94046b6dd9b5d9548d49f&page
    =1&pageSize=10&language=es`)
    const notic = await respuesta.json();
    return notic;
}
