import React from 'react';
import styles from'./Lista.module.scss'

export default function Lista(){
    const tarefa = [{
        tarefa: 'React',
        tempo: '02:00:00',
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00',
    }, {
        tarefa: 'TypeScript',
        tempo: '03:00:00',
    }]
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia!</h2>
            <ul>
                {tarefa.map(( item, index ) => (
                    <li key={index} className={styles.item}>
                       <h3>{item.tarefa}</h3>
                       <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}