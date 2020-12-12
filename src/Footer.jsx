import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return(
    <footer>
        <p>Copywrite © {year}</p>
    </footer>);
}

export default Footer;