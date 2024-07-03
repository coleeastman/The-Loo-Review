import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} TheLooReview, All Rights Reserved&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Version 1.0.0 </p>
            </div>
        </footer>
    );
};

export default Footer;
