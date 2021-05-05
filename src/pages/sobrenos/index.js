import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Footer2 from '../../Components/Footer2';
import Sobrecard from '../../Components/Sobrecard';
import '../../App.css'


export default class Sobre extends Component {
    render() {
        return (
            <>
                <Navbar />
                <body className="bg-sobre">
                <div class="card fotosobre">
                    <img class="card-img-bottom fotosobre" src="https://imgur.com/veP37Vd.jpg" alt="Imagem de capa do card" />
                </div>
                <div className="sobretitle">
                    <img src="https://imgur.com/C2VDKuV.gif" alt="Sobre nós title" className="sobretitle"/>
                </div>
                <div className ="box box1">
                    <img src="https://imgur.com/O3MGAyj.png" alt="Sobre nós card 1" className="box1" />
                </div>
                <div className ="box box2">
                    <img src="https://imgur.com/ps7wIgN.png" alt="Sobre nós card 2" className="box2" />
                </div>
                <div className ="box box3">
                    <img src="https://imgur.com/VrSUZ0s.png" alt="Sobre nós card 3" className="box3" />
                </div>
                <div className ="box box4">
                    <img src="https://imgur.com/DwfTWAw.png" alt="Sobre nós card 4" className="box4" />
                </div>
                </body>
                    <Footer />
                    <Footer2 />
            </>
        )
    }
}
