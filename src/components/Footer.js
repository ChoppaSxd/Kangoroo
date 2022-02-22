import React, { Component } from 'react';
import '../components/Footer.css';
import facebook from '../images/facebook.png';
import telegram from '../images/telegram.png';
import instagram from '../images/instagram.png';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <footer>
                    <div className='container'>
                        <div className='info'>
                            <h6 className='adress'>Адреса: с.Сокільники вул.Богуна №2</h6>
                            <h6 className='phone'>тел: 0679495034</h6>
                        </div>
                        <div className='images'>

                            <a href='https://www.facebook.com/profile.php?id=100011857111806' target={"_blank"}><img className='photos' src={facebook} /></a>
                            <a href='https://web.telegram.org/z/' target={"_blank"}><img className='photos' src={telegram} /></a>
                            <a href='https://www.instagram.com/kangaroo.sadok/' target={"_blank"}><img className='photos' src={instagram} /></a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;