import PropTypes from 'prop-types'
//import { Link, NavLink, Router, useHistory } from "react-router-dom";
//import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1 >{title}</h1>    
        </header>
    )
}

Header.defaultProps = {
    title: 'IM1002',
}

Header.prototype = {
    title: PropTypes.string.isRequired,

}

export default Header
