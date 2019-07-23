import React from 'react';
import SubNav from './SubNav';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    const { MenuItem, SubMenu } = props;
    return (
        <div><Link to={`/${MenuItem}`} render={props => (<SubNav MenuItem={MenuItem} SubMenu={SubMenu} />)}><button>{MenuItem}</button></Link></div>
    )
}

export default Nav;
