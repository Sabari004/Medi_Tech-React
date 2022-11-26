import React from 'react';
import '../Styles/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
    return ( 
        <>
            <div className='footer'>
                <div className='footer-div'>
                    <InstagramIcon/>
                    <WhatsAppIcon/>
                    <FacebookOutlinedIcon/>
                    <TwitterIcon/>
                </div>
            </div>
        </>
     );
}

export default Footer;