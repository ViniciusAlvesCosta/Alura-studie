import React, { useState }  from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Itarefa } from '../types/tarefa';
import styles from './App.module.scss'



function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]> ([])
  const [selecionado, setSelecionado] = useState<Itarefa>()
  function selecionatarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map( tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarfea={selecionatarefa} />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
