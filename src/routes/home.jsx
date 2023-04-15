import {Navbar} from "../component/navbar/navbar";
import {Hero} from "../component/hero"
import React from "react";

export function Home(){
    return(
        <>
        <Navbar />

        <Hero  
        cName="hero" 
        heroImg="https://images3.alphacoders.com/165/thumb-1920-165265.jpg"
        title="Your journey starts from here"
        text="Choose your favourite destination"
        buttonText="Travel plan"
        url="/"
        btnClass="show"
        />
       
        </>
    )
}