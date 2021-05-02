import React, { Component } from 'react';

export default class Carousel extends Component {

    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://imgur.com/TMUQ0XO.jpg" alt="Priemrio slide" />
                </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://imgur.com/5p26qSi.jpg" alt="Segundo Slide" />
                </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://imgur.com/77vNgzw.jpg" alt="Terceiro Slide" />
                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Anterior</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Próximo</span>
                            </a>
                        </div>

        )
    }

}