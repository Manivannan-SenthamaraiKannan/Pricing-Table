import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import '../Styles/HomePage.css'

function HomePage() {
    return (
        /**
         * A component that renders the pricing section of the site.       
         * @returns None       
         */
        <>
            <section class="pricing py-5">
                <div class="container">
                    <div class="row">
                        <CardOne></CardOne>
                        <CardTwo></CardTwo>
                        <CardThree></CardThree>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;