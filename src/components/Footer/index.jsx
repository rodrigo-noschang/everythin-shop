import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import FooterContainer from './style';

const Footer = () => {

    return (
        <FooterContainer>
            <div className = 'footer-content-limiter'>
                <p className = 'contact-me-email'> 
                    <span className = 'contact-me-small'> Contact me: </span> 
                    <a href = 'mailto:rodrigo.noschang1@gmail.com'> rodrigo.noschang1@gmail.com </a>
                </p>
                <div className = 'contact-me-social-container'> 
                    <div className = 'contact-me-social social-github'>
                        <AiFillGithub />
                        <span className = 'contact-me-social-name'> Github </span>
                    </div>
                    <div className = 'contact-me-social social-linkedin'>
                        <AiFillLinkedin />
                        <span className = 'contact-me-social-name'> LinkedIn </span>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;