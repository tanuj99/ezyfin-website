import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
// import Pagination from '../Pagination';
import HeroSection from '../HeroSection';

function Home(){
    return(
        <>
            <HeroSection/>
            <Cards/>
            {/* <Pagination/> */}
            <Footer/>
        </>
    );
}

export default Home;