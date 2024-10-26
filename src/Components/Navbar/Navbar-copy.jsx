import React from 'react'
import logo_vajilla from '../../public/images/logo_vajilla.jfif'

const Navbar = () => {

return (
    <div className='footLogo'>
        <ul>
            <li><img src={logo_vajilla} width={150} height={150} alt='logo_vajilla'/></li>
            <li><h3 className='phrase'>Tus recuerdos en porcelana</h3></li>
        </ul>
    </div>
);
}

export default Navbar