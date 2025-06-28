import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapPin} from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {

    const imgContainer =
        <div className="img-container">
            <img className="card-img" src={props.pic} />
        </div>


    const descriptionContainer = 
        <div className="description-container">
            <h2>{props.place}</h2>
            <div id="meta-data">
                <div id="location">
                    <FontAwesomeIcon icon={faMapPin} id="pin"/>
                    <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">{props.location}</a>
                </div>
                <p id="date">{props.date}</p>
            </div>
            <p id="description">{props.description}</p>
        </div>

    const content = (props.id % 2 === 0)
        ? [imgContainer, descriptionContainer]
        : [descriptionContainer, imgContainer];

    return (
        <section className="location-card">
            {content}
        </section>
    )
}