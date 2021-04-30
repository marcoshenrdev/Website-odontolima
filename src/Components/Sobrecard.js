import React, { Component } from 'react';

export default class Sobrecard extends Component {
    render() {
        return (

            <div class="card bg-light text-white">
                <img class="card-img" src="https://sorria.dentalprev.com.br/wp-content/uploads/2015/06/Com-que-frequ%C3%AAncia-devo-visitar-o-dentista-1.png" alt="Imagem do card" />
                    <div class="card-img-overlay">
                        <h5 class="card-title">Quem somos ?</h5>
                        <p class="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
                        <p class="card-text">Atualizados 3 minutos atrás</p>
                    </div>
            </div>
        )
    }
}