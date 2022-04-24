import React from 'react'


export default props =>
    <div class="container">
        <div class="nome">
            <h5>{props.nome}</h5>
        </div>
        <div class="idade">
            <span>Time: {props.idade}</span>
        </div>
        <div class="time">
            <span>Idade: {props.time}</span>
        </div>
        <div class="sobrenome">
            <span>Sobrenome: {props.sobrenome}</span>
        </div>
    </div>