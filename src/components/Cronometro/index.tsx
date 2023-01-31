import Botao from '../Botao'
import Relogio from './Relogio'
import styles from './Cronometro.module.scss'
import { TempoParaSegundos } from '../../common/utils/time'
import { Itarefa } from '../../types/tarefa'
import { useState} from 'react'

interface props {
    selecionado: Itarefa | undefined
}

export default function Cronometro({ selecionado }: props) {
    const [tempo, setTempo] = useState<number>()
    if(selecionado?.tempo) {
        setTempo(TempoParaSegundos(selecionado.tempo))
    }
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={styles.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}