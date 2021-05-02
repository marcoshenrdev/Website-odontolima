import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Sobrecard from '../../Components/Sobrecard';


export default class Sobre extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div class="card fotosobre">
                    <img class="card-img-bottom fotosobre" src="https://imgur.com/veP37Vd.jpg" alt="Imagem de capa do card" />
                </div>
                    <Sobrecard />
                    <Footer />
            </>
        )
    }
}
