import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


export default class Header extends Component {

    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="logo">SHELFIE</div>
                    <Link to='/' ><button className="header-btn">Dashboard</button></Link>
                    <Link to='/add'><button className="header-btn">Add Inventory</button></Link>
                </div>
            </header>
        )
    }
}