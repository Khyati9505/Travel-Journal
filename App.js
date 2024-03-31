import React from "react"
import Card from "./Card.js"
import Header from "./Header.js"
import data from "./data.js"

export default function App()
{
    const places = data.map(ele => {
        return(
            <Card
            key = {ele.id}
            title = {ele.title}
            location = {ele.location}
            mapsUrl = {ele.googleMapsUrl}
            startDate = {ele.startDate}
            endDate = {ele.endDate}
            description = {ele.description}
            imageUrl = {ele.imageUrl}
            />
            )})
    return(
        <div className = "container">
        <Header />
        {places}
        </div>
    )
}
       