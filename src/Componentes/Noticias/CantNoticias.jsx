import "./CantNoticias.css"
const CantNoticias = ({noticias})=>{

    return <h2 className="font">Esta viendo 10 noticias de {noticias.totalResults }  resultados</h2>
}
export default CantNoticias;