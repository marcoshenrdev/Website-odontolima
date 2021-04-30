import React, { Component } from 'react';

export default class Navbar extends Component {


    render() {
        return (
            <div className='container-fluid p-0'>
                <nav className="navbar navbar-expand-md w-100">
                    <a className="navbar-brand"><i className="fas fa-tooth" style={{ fontSize: 35 }} />&nbsp;OdontoLima</a>

                    <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="navbar-nav collapse navbar-collapse" id="navbarMainToggler">
                        <a className="nav-link">Sobre Nós</a>
                        <a className="nav-link">Localização</a>
                        <a className="nav-link">Contato</a>
                        <button type="button" className="btn btn-warning text-white border-light ml-3">Atendimento de Emergência</button>
                    </div>


                </nav>
            </div>
        )


    }
}