import React from "react"


export default function Card(props) {
    return (
        <div className = "card">
            <img src = {props.imageUrl} alt = "picture of place" className = "cardImage"></img>
                <div className = "cardInfo">
                    <span className = "cardHeading">
                        <img src = "./Images/Maps.png" className = "cardMaps"></img>
                        <h6 className = "cardLocation">{props.location}</h6>
                        <a href = {props.mapsUrl} className = "cardLink">View on Google Maps</a>
                    </span>
                    <h1 className = "cardTitle">{props.title}</h1>
                    <p className = "cardDate">{props.startDate}-{props.endDate}</p>
                    <p className = "cardDescription">{props.description}</p>
                    <hr className = "cardLine"></hr>
                </div>
        </div>
    )
}