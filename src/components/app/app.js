import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import ItemList from '../item-list';
import './app.css';
//import PlanetList from '../planet-list/planet-list';
//import PersonList from '../persen-list/persen-list';
//import SwapiService  from '../../services/services';

export default class App extends Component {
    state = {
        selectedPerson: null
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };
    render (){

        return (
            <div className="stardb-app">
                <Header />
                <RandomPlanet/>
                <div className="container main-window">
                    <div className="row">
                        <div className="col-md-4">
                            <ItemList  OnItemSelected={this.onPersonSelected}/>
                        </div>
                        <div className="col-md-8">
                            <PersonDetails personId={this.state.selectedPerson}/>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}