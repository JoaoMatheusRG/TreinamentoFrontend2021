import React from 'react'
import './style.css'

import { Receita } from '../../components/Receita/Receita'

export function Main() {
    return(

        <main>

            <div id="mainTitulo">
                <span>Receitas</span>
            </div>

            <div id="mainCorpo">

                <input 
                    id="nome" 
                    placeholder="Nome" 
                    type="text"
                />
                <input 
                    id="tempoPreparo" 
                    placeholder="Tempo de Preparo" 
                    type="text"
                />
                <input 
                    id="categoria" 
                    placeholder="Categoria" 
                    type="text"
                />
                <button>
                    <span>Adicionar</span>
                </button>
            </div>

            <div id="tarefas">

                <ul id="tarefasList">
                    <Receita />
                </ul>

            </div>

        </main>
    );
}

// let itensLista = [];
// // Pega a lista de tarefas (ul)
// let listaTarefas = document.getElementById("tarefasList")
// let i = 0;

// function AddTarefa() {
    
//     console.log(listaTarefas)
//     // Pega o input do usuário (input)
//     let inputNome = document.getElementById("nome").value;
//     let inputTempo = document.getElementById("tempoPreparo").value;
//     let inputCategoria = document.getElementById("categoria").value;


//     if ((inputNome == "") || (inputTempo == "") || (inputCategoria == "")) {
//         alert("Não foi adicionado a receita, pelo motivo de uma das caixas se encontrarem vazia.")
//     }
//     else {

//         if (itensLista.length > 1) {

//             listaTarefas.style.overflowX = "scroll"

//         }

     

//     }
// }
   
// function RemoverTarefa(pos) {
//     console.log(itensLista)
//     console.log(itensLista[pos])
//     //document.getElementsByName(itensLista[pos]).remove();

//     let elementos = document.getElementById("tarefasList").childNodes;
//     document.getElementById("tarefasList").remove();

//     //itensLista.splice(itensLista.indexOf(i),1)
//     //listaTarefas.removeChild(itensLista[pos])
    
    
// }


