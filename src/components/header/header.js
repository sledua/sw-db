import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Starwars</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Главная <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Персонажы</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Планеты</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Корабли</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        );   
    }
}