import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Footer2 from '../../Components/Footer2';
import '../../App.css';

export default class Emergencia extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="card cardemerg">
                    <img className="card-img cardemergimg" src="https://imgur.com/6TooBJi.gif" alt="Imagem do card" />
                    <div className="card-img-overlay">
                        <h5 className="card-title"></h5>
                    </div>
                </div>
                <div className="emergtexto">
                    <div className="emergtitle">
                    <p></p><br />Ceilândia Centro
                    <p></p>Telefone para contato: (61) 9 9334-8464  <br /><br />
                    <a href="https://api.whatsapp.com/send?phone=5561993348464&text=Ol%C3%A1%20%3A)" className="btn btn-success btn-lg mb-5 ml-2 wppbtn"><i className="fab fa-whatsapp"></i>WhatsApp</a>
                    </div>
                    <div className="alert alert-danger font-weight-bold text-center mb-5" role="alert">
                        É necessário agendar o atendimento !!! Ligue agora.
                    </div>
                    <p></p>Dentistas que fazem procedimentos de emergência<br /> e para alívio da dor, ou qualquer eventualidade que necessite<br /> de atendimento imediato.
                    <p>
                        <ul className="list-group">
                            <li className="list-group-item disabled">Dor de dente.</li>
                            <li className="list-group-item disabled">Canal.</li>
                            <li className="list-group-item disabled">Dor no siso.</li>
                            <li className="list-group-item disabled">Fratura dental.</li>
                            <li className="list-group-item disabled">Rosto inchado.</li>
                            <li className="list-group-item disabled">Próteses quebradas.</li>
                            <li className="list-group-item disabled">E pacientes que não tem tempo durante o horário comercial.</li><br/><br/>
                        </ul>
                    </p>
                </div>
                
                <Footer />
                <Footer2 />
            </>
        )
    }
}