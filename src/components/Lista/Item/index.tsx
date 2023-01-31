import { Itarefa } from '../../../types/tarefa'
import styles from './Item.module.scss'

interface props extends Itarefa {
    selecionaTarfea: (tarefaSelecionada: Itarefa) => void
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarfea }: props) {
    return (
        <li className={`${styles.item} ${selecionado ? styles.itemSelecionado : '' }`} onClick={() => selecionaTarfea({
         tarefa,
         tempo,
         selecionado,
         completado,
         id   
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}