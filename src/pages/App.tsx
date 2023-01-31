import React, { useState }  from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Itarefa } from '../types/tarefa';
import styles from './App.module.scss'



function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]> ([])
  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
