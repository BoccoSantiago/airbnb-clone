import React from "react"
import Navbar from "./components/Navbar"
//import Hero from "./components/Hero"
import Card from "./components/Card"
import "./style.css"
import katie from './images/katie-zaferes.png' 
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    // <Hero />
    return (
        <div>
            <Navbar />
            <Card
            img={katie}
            rating="5.0"
            reviewCount = {6}
            country= "USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
            />
        </div>
    )
}