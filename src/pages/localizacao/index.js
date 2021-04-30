import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Mapa from '../../Components/SimpleMap';
import '../../App.css'


export default class Localizacao extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="card tcard text-center">
                    <div className="card-header">
                        Venha nos conhecer
                </div>
                    <div className="card-body">
                        <h5 className="card-title">Endereço:</h5>
                        <p className="card-text">CNM 2 Edifício Costa Azul, St. P Qnp 19 Bl B, sala 217 - Ceilândia Centro, Brasília - DF.</p>
                        <a href="#" className="btn btn-primary">Agende seu horário</a>
                    </div>
                </div>
                <Mapa />
                <Footer />
            </>
        )
    }
}