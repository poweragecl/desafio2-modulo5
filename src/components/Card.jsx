import Heart from "./Heart"
import PropTypes from "prop-types";

export const Card = ({imagen, autor, descripcion, fav, id, onLikeClick}) =>{


    return(
        <>
            <article className={`card-item ${fav ? "liked" : ""}`} >
                <button className="heart-button" onClick={() => onLikeClick(id)}>
                    <Heart fav={fav}></Heart>
                </button>
                <img src={imagen}/>
                <div className="card-info">
                    <p className="card-description">{descripcion}</p>   
                    <h5 className="autor">{autor}</h5>       
                </div>
                
            </article>
        </>
    )
}

Card.propTypes = {
    imagen: PropTypes.string.isRequired,
    autor: PropTypes.string,
    descripcion: PropTypes.string,
    fav: PropTypes.bool,
    id: PropTypes.number,
    onLikeClick: PropTypes.func
}