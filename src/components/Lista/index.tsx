import { Itarefa } from '../../types/tarefa';
import Item from './Item';
import styles from'./Lista.module.scss'


export default function Lista({ tarefas }: { tarefas: Itarefa[] }) {

    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia!</h2>
            <ul>
                {tarefas.map(( item, index ) => (
                   <Item
                   key={index}
                    {...item}
                   />
                ))}
            </ul>
        </aside>
    )
}