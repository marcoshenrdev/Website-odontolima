import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Footer2 from '../../Components/Footer2';
import '../../App.css';



export default class Contato extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="card text-center cardctt">
                    <div className="card-header cardcttheader">
                        Contato
                    </div>
                    <div className="card-body">

                        <p className="card-text pt-3 cardctttext">
                        <i className="iphone fas fa-phone"></i> <i className="iwpp fab fa-whatsapp"></i> Telefones:<br/>(61) 3525-8046<br/>(61) 9 8447-7999<br/><br/>
                        <i className="iemail fas fa-envelope"></i> E-mail: odontolimabrasilia@hotmail.com<br/><br/>
                        <i className="iface fab fa-facebook"></i> facebook.com/OdontoLimaBrasilia<br/><br/>
                        <i className="iinsta fab fa-instagram"></i> consultorioodontolima
                        </p>
                    </div>
                </div>
                <Footer />
                <Footer2 />
            </>
        )
    }
}
