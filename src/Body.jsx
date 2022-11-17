import React from 'react'
import Boxes from './Boxes'
import Footer from './Footer'

export default function Body() {
    return (
        <div>
            <div className="container">
                <div className="midcontainer">
                    <div className="innercontainer">
                        <h2>Sample Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt tenetur optio blanditiis harum eum laudantium vitae ea sit impedit laborum, minus quibusdam pariatur libero, corrupti repellat aspernatur in natus.</p>
                        <button>Call to action!</button>
                    </div>
                </div>
                <hr />

                <Boxes />
                <hr />
            </div>
            <Footer />
        </div>
    )
}
