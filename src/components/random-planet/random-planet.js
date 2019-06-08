import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-white bg-primary mb-3 custom-cart">
                            <img 
                                className="random-image"
                                src="https://starwars-visualguide.com/assets/img/characters/4.jpg"
                                alt="character"/>
                            <div className="card-body">
                                <h4 className="card-title">Primary card title</h4>
                                <p className="card-text">Some quick example.</p>
                                <p className="card-text">Some quick example.</p>
                                <p className="card-text">Some quick example.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}