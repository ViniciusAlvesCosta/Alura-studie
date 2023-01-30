import React from'react';
import styles from './Botao.module.scss'

class Botao extends React.Component <{ children: string}>{
    render() {
        return(
            <button className={styles.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao