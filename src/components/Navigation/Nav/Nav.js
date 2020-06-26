import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import styles from "./Nav.module.css"
import Logo  from './logo.svg';

const inAuth = true;
const links = [
    {
        to: '/',
        label: 'Login',
        exact: true
    },
    {
        to: '/register',
        label: 'Register',
        exact: false
    },
    {
        to: '/about',
        label: 'About',
        exact: false
    },
    {
        to: '/dashboard',
        label: 'Dashboard',
        exact: false
    }
]
export default class Nav extends Component{

    renderLinks () {
        if(inAuth) {
            return links.map((link,index) => {
                return (

                    <li key={index}>
                        <NavLink to={link.to} exact={link.exact}>{link.label}</NavLink>
                    </li>


                )
            })
        } else {

        }

    }
    render() {
        return (
            <nav className={styles.Nav}>
                <div className={styles.logo}>
                    <img src={Logo} className={styles['logo-img']} alt="logo"/>
                    <a href="/" className={styles['Navbar-logo']}>React</a>
                </div>
                <ul className={styles['Navbar-list']}>
                    {this.renderLinks()}
                </ul>
                <ul className={styles['Navbar-list']}>
                    <li><a href="/">User</a></li>
                    <li><a href="/">logout</a></li>
                </ul>
            </nav>
        )
    }
};

