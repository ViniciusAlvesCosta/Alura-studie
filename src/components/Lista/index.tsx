import { Itarefa } from '../../types/tarefa';
import Item from './Item';
import styles from'./Lista.module.scss'

interface props {
    tarefas: Itarefa[]
    selecionaTarfea: (tarefaselecionada: Itarefa) => void
}


export default function Lista({ tarefas, selecionaTarfea }: props) {

    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia!</h2>
            <ul>
                {tarefas.map(( item) => (
                   <Item
                   selecionaTarfea={selecionaTarfea}
                   key={item.id}
                    {...item}
                   />
                ))}
            </ul>
        </aside>
    )
}