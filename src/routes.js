import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/home';
import Sobre from './pages/sobrenos';
import Local from './pages/localizacao';
import Contatos from './pages/contatos';
import Emergencia from './pages/emergencia';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/sobre' component={Sobre} />
                <Route path='/localizacao' component={Local} />
                <Route path='/contato' component={Contatos} />
                <Route path='/atendimentodeemergencia' component={Emergencia} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;