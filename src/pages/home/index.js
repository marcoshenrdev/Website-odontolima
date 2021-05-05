import React,{ Component } from 'react';
import Navbar from '../../Components/Navbar';
import Carousel from '../../Components/Carousel';
import Cards from '../../Components/HomeCards';
import Footer from '../../Components/Footer';
import Footer2 from '../../Components/Footer2';
import '../../App.css';

export default class Home extends Component {
    render(){
        return(
            <>
                <Navbar />
                <Carousel />
                <Cards />
                <Footer />
                <Footer2 />
            </>
        )
    }
}