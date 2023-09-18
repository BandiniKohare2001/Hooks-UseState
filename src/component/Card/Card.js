import Button from "../Button/Button";
import "./Card.css";


export default function Card({ title, imageUrl, name }) {
    return (
        <>
            <div className="card">
                <img src={imageUrl} alt={title} />

                <h2 className="card-title">{name}</h2>
           <Button />
                </div>
        </>

    )
}