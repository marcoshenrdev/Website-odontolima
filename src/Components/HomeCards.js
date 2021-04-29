import React, { Component } from 'react';
import '../App.css';


export default class Cards extends Component {

    render() {
        return (
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src="https://imgur.com/ecHEdmd.jpg" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Como tudo começou</h5>
                        <p className="card-text">Entenda de onde surgimos, conheça nossos líderes e fique por dentro da história da nossa clínica.</p>
                        <p className="card-text"><small class="text-muted">Atualizados 5 minutos atrás</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://imgur.com/ecHEdmd.jpg" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Conheça melhor</h5>
                        <p className="card-text">Saiba mais sobre nossos serviços, produtos e parceirias</p>
                        <p className="card-text"><small class="text-muted">Atualizados 57 minutos atrás</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://imgur.com/ecHEdmd.jpg" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Agende seu horário</h5>
                        <p className="card-text">Verifique a disponibilidade e venha sorrir com a gente !</p>
                        <p className="card-text"><small class="text-muted">Atualizados 2 dias atrás</small></p>
                    </div>
                </div>
            </div>

        )

    }

}