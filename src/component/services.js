import React from "react";

export default function ServicesCard(prop){
    return(
        <div className="App-service">
            <div className="App-service-item">
                <div className="row height">
                    <div className="col-8">
                        <div className="row justify-c-center">
                            <div className="col-3">
                                img
                                {/* <img></img> */}
                            </div>
                            <div className="col-9">
                                 <div className="location">
                                    <h3 className="location-title">Japan</h3>
                                    <a href="#" className="location-map">map</a>
                                 </div>
                                 <div className="title">
                                    <h2>title</h2>
                                 </div>
                                 <div className="details">
                                    <p><strong>from date</strong> - <strong>to date</strong></p>
                                    <p>paraghrap</p>
                                 </div>   
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
            
        </div>
    )
} 