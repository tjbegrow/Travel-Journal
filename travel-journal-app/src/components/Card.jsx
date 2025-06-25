export default function Card(props) {
    return (
        <section className="location-card">
            <div className="img-container">
                <img className="card-img" src={props.pic}/>
            </div>
            <div className="description-container">
                <h2>{props.place}</h2>
                <p id="date">{props.date}</p>
                <p>{props.description}</p>
            </div>
      </section>
    )
}