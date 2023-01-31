import styles from './Relogio.module.scss'

interface props {
    tempo: number | undefined
}

export default function Relogio ({ tempo = 0 }: props) {
    const minutos =  Math.floor(tempo / 60)
    const segundos = tempo % 60
    return (
        <>
            <span className={styles.relogioNumero}>0</span>
            <span className={styles.relogioNumero}>0</span>
            <span className={styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>0</span>
            <span className={styles.relogioNumero}>0</span>
        </>
    )
}