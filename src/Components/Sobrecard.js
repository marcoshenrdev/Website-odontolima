import React, { Component } from 'react';

export default class Sobrecard extends Component {
    render() {
        return (

            <div class="card bg-light text-white">
                <img class="card-img sobrecardimg" src="https://imgur.com/V8qWXSm.jpg" alt="Imagem do card" />
                    <div class="card-img-overlay">
                        <h5 class="card-title sobrecardtitle">Um pouco mais sobre nós</h5>
                        <p class="card-text sobrecardtext">A Clínica OdontoLima é uma empresa familiar fundada em 2013 e, com o intuito de levar odontologia especializada ao público da Ceilândia – DF, atuamos em todas as áreas. Atualmente, nossa sede fica no centro da cidade, porém, dando início ao nosso projeto de expansão, estamos em processo de finalização da primeira filial, que será localizada em Ceilândia Norte, com total foco àquele público. Essa é somente a primeira etapa de nosso plano de expansão que, no futuro, deverá contar, primeiramente, com filiais em todas as áreas na cidade que atuamos.
                            Trabalhamos de forma segmentada, portanto, temos especialistas nas mais diversas áreas, com grande foco em dentística, ortodontia, endodontia, periodontia, clínica geral e implantes dentários. Após a publicação da Resolução 176/2016 do Conselho Federal de Odontologia, contamos com especialista, dentro de nosso quadro de pessoal, para aplicação de toxina botulínica (botox) e preenchedores faciais, para fins terapêuticos funcionais e estéticos.
                            O público que procura clínica odontológica, como também trabalhos com botox e preenchimento está cada vez mais exigente, tanto em nível nacional, como em nível estadual, principalmente onde atuamos, na capital do pais. Dessa forma, procuramos ser referência em qualidade em todas os segmentos que atuamos.</p>
                    </div>
            </div>
        )
    }
}