import React from 'react';
import {FooterContainer, Title, FooterLinksContainer, FooterWrap, FooterLogoItems, FooterLinksWrapper, FooterLinkTitle, FooterLink, FooterLinkItems} from './FooterElem';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import facebook from '../../../public/images/ico-facebook.png'

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
       <FooterLogoItems>
          <Title><AutoAwesomeIcon sx={{ transform: "scale(1)" }}/>Aura de Cristal</Title>
        </FooterLogoItems>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <PlaceIcon sx={{fontSize:'20', width: '3em'}}/>
                <FooterLinkTitle>Oficina</FooterLinkTitle>
                <FooterLink>Calle 13, Lima, Perú</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <CallIcon sx={{fontSize:'20', width: '3em'}}/>
                <FooterLinkTitle>Teléfonos</FooterLinkTitle>
                <FooterLink>(51)987654321</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
              <MailIcon sx={{fontSize:'20', width: '3em'}}/>
                <FooterLinkTitle>Escribenos</FooterLinkTitle>
                <FooterLink>info@adc.com</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <div className='footIcons'>
            <img src={facebook} width={20} height={20} alt="Facebook Icon" />
          </div>
        </FooterWrap>
      </FooterContainer>
    </React.Fragment>
  )
}

export default Footer
