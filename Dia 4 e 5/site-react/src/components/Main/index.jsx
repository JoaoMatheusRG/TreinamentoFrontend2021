import React, { useState} from 'react'
import './style.css'
import NewTask from './NewTask'

function Main() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    function writeInput(e) {
        setInput(e.target.value);
    }

   const showBoxTasks = tasks.map( (item) => {
        return <NewTask key={item.key} name={item.name} />
            })
        


    function TarefaLista () {

        if(!input){ return alert("Não há nenhuma tarefa para ser adicionada")}

        const newTask = {
            key: Math.random(),
            name: input
        }
        
        setInput("")
        setTasks((prevState) => {
            return [...prevState, newTask]
        });
    }

    return(
        <main>
            <div className="container">
                <div className="mainPrincipal">
                    <div className="mainTitulo">
                        <span>
                            Lista
                        </span>
                    </div>
                    <div className="mainCorpo">
                        <input 
                            value={input}
                            onChange={writeInput}
                            placeholder="Nome" 
                            type="text"
                            className="addNewTarefa" 
                        />
                        <button onClick={ () => TarefaLista() }>
                            <span>
                                Adicionar
                            </span>
                        </button>
                    </div>
                        <div className="tarefas">
                            <ul>{showBoxTasks}</ul>
                        </div>
                </div>
            </div>
        </main>
    );
}

export default Main;