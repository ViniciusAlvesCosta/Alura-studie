import React from 'react';
import Item from './Item';
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
                   <Item
                   key={index}
                    {...item}
                   />
                ))}
            </ul>
        </aside>
    )
}