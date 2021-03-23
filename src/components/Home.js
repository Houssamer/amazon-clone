import React from 'react';
import './Home.css';
import banner from '../banner.jpg';
import Product from './Product'
import Header from './Header'

function Home() {
    return (
        <div className="home">
                <Header />
                <img 
                    src={banner} 
                    alt="banner__image" 
                    className="home__banner"
                />
                
            <div className="home__products">
                <div className="home__products__row">
                    <Product
                        id="1"
                        title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black" 
                        price={94} 
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX425_.jpg"
                    />
                    <Product
                        id="2" 
                        title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black" 
                        price={94} 
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX425_.jpg"
                    />
                </div>
                <div className="home__products__row">
                    <Product 
                        id="3"
                        title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black" 
                        price={94}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX425_.jpg"
                    />
                    <Product 
                        id="4"
                        title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black" 
                        price={94} 
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX425_.jpg"
                    />
                    <Product 
                        id="5"
                        title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black" 
                        price={94} 
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX425_.jpg"
                    />
                </div>
                <div className="home__products__row">
                <Product 
                    id="6"
                        title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black" 
                        price={94}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX425_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
