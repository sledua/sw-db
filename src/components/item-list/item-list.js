import React, { Component } from 'react';
import SwapiService from '../../services/services';
import './item-list.css';
import Spiner from '../spiner/spiner';
export default class ItemList extends Component {
    swapiService = new SwapiService();
    state = {
        peopleList: null
    };
    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                });
            });
    }
    renderItems(arr){
        return arr.map(({id, name})=>{
            return (
                <a
                    className="list-group-item list-group-item-action"
                    key={id}
                    onClick={() => this.props.OnItemSelected(id)}>
                {name}
                </a>
            )
        });
    }
    render (){

        const { peopleList } = this.state;

        if(!peopleList) {
            return <Spiner />
        }

        const items = this.renderItems(peopleList);

        return(
            <div className="list-group">
                {items}
            </div>
        );
    }
}