import React from 'react'
import './Home.css';
import HomepageBanner from './../../Components/HomepageBanner'
import CategoriesRow from './../../Components/CategoriesRow'
import WhyUs from './../../Components/WhyUs'
import Featured from './../../Components/Featured'
import Footer from './../../Components/Footer'

function Home(){
    return(
        <div className='home-container'>
            <HomepageBanner />
            <CategoriesRow />
            <Featured />
            <WhyUs />
            <Footer />
        </div>
    )
}

export default Home;