import React from 'react';
import {FooterContainer, FooterLinksContainer, FooterWrap, FooterLogoItems, FooterLinksWrapper, FooterLinkTitle, FooterLink, FooterLinkItems} from './FooterElem';
import { Typography } from '@mui/material';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import logoVajilla from '../../../public/images/logo-aura.png'

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <FooterLogoItems>
          <img src={logoVajilla} width={70} height={70} alt="Logo-icon" />
          <Typography sx={{ fontSize: "0.8rem", paddingLeft: "1%",fontWeight:'bold' }}>
            Copyright© 2024
          </Typography>
        </FooterLogoItems>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FaFacebook size={30} />
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <RiInstagramFill size={30} />
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FaSquareXTwitter size={30} />
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FaSquareWhatsapp size={30} />
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </React.Fragment>
  )
}

export default Footer
