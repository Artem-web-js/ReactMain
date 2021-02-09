import React from 'react';
import c from './Header.module.css';
import { NavLink } from 'react-router-dom';
import chat from '../../assets/chat.svg'

const Header = (props: any) => {
    return (
        <header className={c.header}>
            <div className={c.headerWrapper}>
                <img src={chat} alt="logo" className={c.logo}/>
                <div className={c.loginBlock}>
                    {props.isAuth
                        ? props.login
                        : <NavLink to={'/login'} className={c.login}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;