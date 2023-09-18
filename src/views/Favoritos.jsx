import { Gallery } from "../components/Gallery"


export const Favoritos = () => {
    return(
        <>
            <h1>Fotos Favoritas</h1>
            <Gallery isFavoritesPage={true}></Gallery>
        </>
    )
}