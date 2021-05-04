import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../App.css';

export default class Emergencia extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="card cardemerg">
                    <img className="card-img cardemergimg" src="https://imgur.com/jfVvlzU.gif" alt="Imagem do card" />
                    <div className="card-img-overlay">
                        <h5 className="card-title"></h5>
                    </div>
                </div>
                <div className="emergtexto">
                    <p></p><br/>Ceilândia Centro
                    <p></p>Telefone para contato: (61) 9 9334-8464  <br/><br/>            
                    <a href="https://api.whatsapp.com/send?phone=5561993348464&text=Ol%C3%A1" className="btn btn-success btn-lg mb-5 ml-2 wppbtn"><i className="fab fa-whatsapp"></i>WhatsApp</a>
                </div>
                <div className="alert alert-danger font-weight-bold text-center mb-5" role="alert">
                    É necessário agendar o atendimento !!! Ligue agora.
                </div>
                <Footer />
            </>
        )
    }
}