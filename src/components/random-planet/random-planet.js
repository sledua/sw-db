import React, { Component } from 'react';
import SwapiService from '../../services/services'
import './random-planet.css';
import Spiner from '../spiner/spiner';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true
    };
    constructor(){
        super();
        this.updatePlanet();
    }
    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    };
    updatePlanet () {
        const id = 12;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
        };
    render () {
        const { loading ,planet } = this.state;
        const spiner = loading ? <Spiner/> : null;
        const contetnt = !loading ? <PlanetView planet={planet}/> : null;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-white bg-primary mb-3 custom-cart">
                            {spiner}
                            {contetnt}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const PlanetView = ({ planet}) => {
    const { id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <img 
                className="random-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="character"/>
            <div className="card-body">
                <h4 className="card-title">Планета: { name }</h4>
                <p className="card-text">Население: { population }</p>
                <p className="card-text">Врашение: { rotationPeriod }</p>
                <p className="card-text">Размер: { diameter }</p>
            </div>
        </React.Fragment>
    );
};