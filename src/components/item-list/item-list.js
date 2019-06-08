import React, { Component } from 'react';
import './item-list.css';
export default class ItemList extends Component {
    render (){
        return(
        <div className="container main-window">
            <div className="row">
                <div className="col-md-4">
                    <div className="list-group">
                        <a href="/" className="list-group-item list-group-item-action active">
                            Jast Active
                        </a>
                        <a href="/" className="list-group-item list-group-item-action">
                            Dapibus ac facilisis in
                        </a>
                        <a href="/" className="list-group-item list-group-item-action">
                            Morbi leo risus
                        </a>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                        </div>
                        <div className="person-details">
                            <img 
                                className="person-image"
                                src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
                                alt="character"/>
                            <ul className="list-group preson-info">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul> 
                        </div>  
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title 
                                and make up the bulk of the card's content.
                            </p>
                        </div>
                        <div className="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>     
                </div>
            </div>
        </div>    
        );
    }
}