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
                <div className="card tcard text-center cardlocal">
                    <div className="card-header cardlocalheader">
                        Venha nos conhecer
                </div>
                    <div className="card-body">
                        <h5 className="card-title cardlocaltitle">Endereço:</h5>
                        <p className="card-text cardlocaltext">CNM 2 Edifício Costa Azul, St. P Qnp 19 Bl B, sala 217 - Ceilândia Centro, Brasília - DF.</p><br/>
                        <a href="https://api.whatsapp.com/send?phone=5561993348464&text=Ol%C3%A1" className="btn btn-primary">Agende seu horário</a>
                    </div>
                </div>
                <Mapa />
                <Footer />
            </>
        )
    }
}