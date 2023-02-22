import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import { useFavoritoContext } from 'Contextos/Favoritos';

function Favoritos() {
    const { favorito } = useFavoritoContext();
    console.log("favorito", favorito)

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container} >
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>


    )
}

export default Favoritos;