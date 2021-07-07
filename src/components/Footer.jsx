import React from 'react';
import Particle from './Particle';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'

function Footer() {
    return (
        <section>
        <Particle />
        <div>
            <footer class="footer">
                <p>Developed by <strong style={{ color : 'yellow'}}>Yash Raj</strong> | © 2021 YRSC</p>

            </footer>
        </div>
        </section>
    )
}

export default Footer;