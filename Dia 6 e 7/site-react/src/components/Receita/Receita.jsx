import trash from '../../assets/trash.png'
import './receita.css';

export function Receita() {
    return(
    <li>
        <div className="li-header">
            <h2 className="li-titulo" >Nome</h2>
            <button onClick={()=>console.log("oi")} className="lixeira">
                <img src={trash} alt="lixeira" />
            </button>
        </div>
        <div className="li-main">
            <h2 className="li-tempo" >Tempo</h2>
            <h2 className="li-categoria" >Categoria</h2>
        </div>
    </li>

    );
}