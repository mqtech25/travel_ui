import React from "react";

export default function ServicesCard(prop){
    return(
            <div className="App-service-item">
                <div className="row justify-c-center">
                    <div className="col-12">
                        <div className="row ">
                            <div className="col-3">
                                <img src={prop.img} width="100%"></img>
                                {/* <img></img> */}
                            </div>
                            <div className="col-9">
                                 <div className="location ml-2">
                                    <h3 className="location-title">{prop.location}</h3>
                                    <a href={prop.locationMap} className="location-map">map</a>
                                 </div>
                                 <div className="title ml-2">
                                    <h2>{prop.title}</h2>
                                 </div>
                                 <div className="details ml-2">
                                    <p>from {prop.fromDate} - to {prop.toDate}</p>
                                    <p>{prop.decription}</p>
                                 </div>   
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
    )
} 