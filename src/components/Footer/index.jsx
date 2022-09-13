import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import FooterContainer from './style';

const Footer = ({ setShowDisclaimer }) => {

    const showDisclaimer = () => {
        setShowDisclaimer(true);
    }
    
    return (
        <FooterContainer>
            <div className = 'footer-content-limiter'>
                <p className = 'contact-me-email'> 
                    <span className = 'contact-me-small'> Contact me: </span> 
                    <a href = 'mailto:rodrigo.noschang1@gmail.com'> rodrigo.noschang1@gmail.com </a>
                </p>
                <div className = 'contact-me-social-container'> 
                    <a className = 'contact-me-social social-github'
                        href = 'https://github.com/rodrigo-noschang/everythin-shop'
                        target = '_blank'
                        rel = 'noreferrer'>
                        <AiFillGithub />
                        <span className = 'contact-me-social-name'> Github </span>
                    </a>
                    <a className = 'contact-me-social social-linkedin'
                        href = 'https://www.linkedin.com/in/rodrigo-noschang/'
                        target = '_blank'
                        rel = 'noreferrer'>
                        <AiFillLinkedin />
                        <span className = 'contact-me-social-name'> LinkedIn </span>
                    </a>
                </div>
                <div className = 'footer-open-disclaimer'>
                    <span className = 'footer-open-disclaimer-content'
                        onClick = {showDisclaimer}>
                         Open Disclaimer... 
                    </span>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;