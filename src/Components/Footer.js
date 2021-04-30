import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (

            <footer className="footer floating">
                <div className="icons">
                    <i className="fab fa-facebook-square"></i> facebook.com/OdontoLimaBrasilia
                <br /><i className="fab fa-instagram"></i> instagram.com/consultorioodontolima
            </div>
                <div className="phone">
                    <i className="fas fa-phone-square"></i>
                    <p>(61) 9 XXXX-XXXX </p>

                </div>
            </footer>

        )
    }
}