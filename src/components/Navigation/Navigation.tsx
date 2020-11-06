import React from 'react';
import c from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Friends from "../Friends/Friends";
import state from "../REDUX/store";
import store from "../REDUX/store";

const Navigations = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to={'/profile'} activeClassName={c.activeLink}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/dialogs'} activeClassName={c.activeLink}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/news'} activeClassName={c.activeLink}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/music'} activeClassName={c.activeLink}>Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/settings'} activeClassName={c.activeLink}>Settings</NavLink>
            </div>
            <Friends sidebar={store._state.sidebar}/>
        </nav>
    )
}

export default Navigations;