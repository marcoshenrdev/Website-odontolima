import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../App.css';

export default class Emergencia extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="cartao card bg-light text-white">
                    <img className="card-img" src="http://biasfortes.com.br/wp-content/uploads/2018/03/dor-de-dente-2.png" alt="Imagem do card" />
                    <div className="card-img-overlay">
                        <h5 className="titulo card-title pt-5">Atendimento de Emergência</h5>
                    </div>
                </div>
                <div className="texto">
                    <p></p>Ceilândia Centro
                    <p></p>Telefone para contato:<br /> (61) 9 9334-8464               
                    <button type="button" className="btn btn-success btn-lg mb-2 ml-5"><i className="fab fa-whatsapp"></i>WhatsApp</button>
                </div>
                <div className="alert alert-danger font-weight-bold text-center mt-2 mb-5" role="alert">
                    É necessário agendar o atendimento !!! Ligue agora.
                </div>
                <Footer />
            </>
        )
    }
}