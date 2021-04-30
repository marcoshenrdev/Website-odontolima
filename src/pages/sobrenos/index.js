import React,{ Component } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Sobrecard from '../../Components/Sobrecard';


export default class Sobre extends Component {
    render(){
        return(
            <>
                <Navbar />
                <Sobrecard />
                <Footer />
            </>
        )
    }
}
