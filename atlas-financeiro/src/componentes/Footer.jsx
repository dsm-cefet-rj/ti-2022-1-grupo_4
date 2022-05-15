import React from 'react';

function Footer() {
    const ano = new Date().getFullYear();

    return (
        <footer id="footer">
            <i class="social-icon fab fa-facebook-f"></i>
            <i class="social-icon fab fa-twitter"></i>
            <i class="social-icon fab fa-instagram"></i>
            <i class="social-icon fas fa-envelope"></i>
            <i class="fa-solid fa-magnifying-glass-dollar"></i>
            <p>Copyright © {ano} Atlas Financeiro</p>
        </footer>
    );
}

export default Footer;