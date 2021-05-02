import React, { Component } from 'react';
import '../App.css';


export default class Cards extends Component {

    render() {
        return (
            <div className="card-deck">
                <div className="card homecard">
                    <img className="card-img-top" src="https://imgur.com/Kfh0UfU.jpg" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title homecardtitle">Conheça nossos serviços</h5>
                        <p className="card-text homecardtext">Saiba mais sobre nossa história e princípios.</p><br/>
                        <a href="https://www.consultorioodontolima.com.br/sobre" className="btn btn-light">Clique aqui!</a>
                    </div>
                </div>
                <div className="card homecard">
                    <img className="card-img-top" src="https://imgur.com/JhCkfnQ.jpg" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title homecardtitle">Problema de emergência? Calma, nós te ajudamos.</h5>
                        <p className="card-text homecardtext">Clique aqui para mais informações.</p><br/>
                        <a href="https://www.consultorioodontolima.com.br/atendimentodeemergencia" className="btn btn-light">Clique aqui!</a><br/><br/><br/><br/>
                    </div>
                </div>
                <div className="card homecard">
                    <img className="card-img-top" src="https://imgur.com/BEY7utq.jpg" alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title homecardtitle">Agende seu horário</h5>
                        <p className="card-text homecardtext">Verifique a disponibilidade e venha sorrir com a gente !</p><br/>
                        <a href="https://www.consultorioodontolima.com.br/contato" className="btn btn-light">Clique aqui!</a>
                    </div>
                </div>
            </div>

        )

    }

}