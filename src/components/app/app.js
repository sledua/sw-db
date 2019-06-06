import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../planet-list/planet-list";
import SwapiService  from "../../services/services";

export default class App extends Component {
    render (){

        return (
            <div className="stardb-app">
                <Header />
                <PersonDetails/>
                
            </div>
        );
    }
}