import React from 'react'
import logo_vajilla from '../../public/images/logo_vajilla.jfif'
import facebook from '../../public/images/ico-facebook.png'
import instagram from '../../public/images/ico-instagram.png'
import whatsapp from '../../public/images/ico-whatsapp.png'

const Footer = () => {
    return (
    <footer>
        <div className='footLogo'>
            <img src={logo_vajilla} width={150} height={150} alt='logo_vajilla'/>
        </div>
        <div className='footIcons'>
            <img src={facebook} alt="Facebook"/>
            <img src={instagram} alt="Instagram"/>
            <img src={whatsapp} alt="WhatsApp"/>
        </div>
    </footer>
    )
}

export default Footer