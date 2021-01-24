import React from 'react';


function Header() {
    return (
        <header style={ headerStyle }>
            <h1>juxtapose</h1>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'left',
    padding: '1px',
    paddingLeft: '15px',
    marginBottom: '15px'
}

export default Header;