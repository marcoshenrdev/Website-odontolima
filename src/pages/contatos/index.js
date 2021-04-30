import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../App.css';



export default class Contato extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="card text-center">
                    <div className="card-header">
                        Contato
                    </div>
                    <div className="card-body">

                        <p className="card-text pt-3">
                        <i className="iphone fas fa-phone"></i> <i className="iwpp fab fa-whatsapp"></i> Telefone:<br/>(Ligação e Whatsapp)<br/> (61) 9 9334-8464<br/><br/>
                        <i className="iemail fas fa-envelope"></i> E-mail: odontolimabrasilia@hotmail.com<br/><br/>
                        <i className="iface fab fa-facebook"></i> facebook.com/OdontoLimaBrasilia<br/><br/>
                        <i className="iinsta fab fa-instagram"></i> consultorioodontolima
                        </p>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
