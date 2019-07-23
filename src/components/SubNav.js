import React from 'react';

const SubNav = (props) => {
    const { MenuItem, SubMenu } = props;
    return (<div>
        {SubMenu[MenuItem].map(e => <button>{e}</button>)}
    </div>)
}
export default SubNav;