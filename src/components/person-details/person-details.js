import React, {Component} from 'react';
import SwapiService from '../../services/services';
import './person-details.css';

export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        person: null
    };
    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps){
        if (this.props.personId !== prevProps.personId ) {
            this.updatePerson();
        }
    }
    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({person})
            })
    }
    render() {
        if(!this.state.person){
            return <span>Выбири кто интересный</span>;
        }
        const   { id, name, gender, birthYear, eyeColor } = this.state.person;
        return(
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="person">
                <img 
                    className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt={`character ${name}`}/>
                <ul className="list-group preson-info">
                    <li className="list-group-item">{gender}</li>
                    <li className="list-group-item">{birthYear}</li>
                    <li className="list-group-item">{eyeColor}</li>
                </ul> 
            </div>  
            
        </div>
        )
    }
}