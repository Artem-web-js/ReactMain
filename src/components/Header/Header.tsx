import React from 'react';
import c from './Header.module.css';
import { NavLink } from 'react-router-dom';
import chat from '../../assets/chat.svg'

const Header = React.memo(({isAuth, login, logout}: any) => {
    return (
        <header className={c.header}>
            <div className={c.headerWrapper}>
                <img src={chat} alt="logo" className={c.logo}/>
                <div className={c.loginBlock}>
                    {isAuth
                        ? <div>{login} - <button onClick={logout}>LOGOUT</button></div>
                        : <NavLink to={'/login'} className={c.login}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
})

export default Header;