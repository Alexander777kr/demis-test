import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className = {styles.header}>
            <nav className = {styles.mainMenu}>
                <NavLink to = '/'>Главная</NavLink>
                <NavLink to = '/news'>Новости</NavLink>
                <NavLink to = '/contactform'>Обратная связь</NavLink>
            </nav>
            
        </header>
    )
}

export default Header;
