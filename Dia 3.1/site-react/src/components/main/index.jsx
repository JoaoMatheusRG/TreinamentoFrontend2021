import React, {useState} from 'react'

import './style.css'

import logo from '../../assets/SerraJR.png';




function Main() {

    let card;

    const [showCard, setShowCard] = useState(true);

    if(showCard){
        card = (
            <div className="mainCard">
            <div className="cardTitulo">
                <span>SERRA JUNIOR ENGENHARIA</span>
            </div>
            <div className="cardLogo">
                <img src={logo} width="84px" height="81" alt=""/>
            </div>
        </div>
        );
    }else {
        card = (<div></div>);
    }

    function ShowCard () {
        setShowCard(!showCard)
    }

    return (
        <div className="main">
            <div className="container">
               {card}
                <div className="botao">
                    <button onClick={ShowCard}>
                        <span>
                            Mostra / Esconde Card
                        </span>
                    </button>
   
                </div>
            </div>
        </div>
    );
}



export default Main;
