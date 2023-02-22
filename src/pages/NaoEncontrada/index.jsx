import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
      <section className={styles.container}>
        <h1>Ops.</h1>
       <p>Conteúdo que vocẽ procura não foi encontrado!</p>
      </section>
    )
}

export default NaoEncontrada;