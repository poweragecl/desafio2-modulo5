import { useContext } from "react"
import { Card } from "./Card"
import { FotosContext } from "../context/fotoscontext";
import PropTypes from "prop-types";

export const Gallery = ({isFavoritesPage}) => {

    const {photos, setPhotos} = useContext(FotosContext);

    const handleLikeClick = (id) => {

        const updatedPhotos = photos.map((photo) => {
            if(photo.id === id){

                if(photo.liked){
                    return {...photo, liked: false}
                }else{
                    return {...photo, liked: true}
                }
                
            }
            return photo;
        });

        setPhotos(updatedPhotos);

    }




    return(
        <>
            <div className="gallery">

                {
    
                    photos.map((f, index) => (
                        
                        (isFavoritesPage && !f.liked) ? null : (
                            <Card
                              key={index}
                              imagen={f.src.large}
                              autor={f.photographer}
                              descripcion={f.alt}
                              fav={f.liked}
                              id={f.id}
                              onLikeClick={() => handleLikeClick(f.id)}
                            ></Card>
                          )
                    
                        ))
                    
                }
            
            </div>      
        </>
    )
}

Gallery.propTypes = {
    isFavoritesPage : PropTypes.bool
}