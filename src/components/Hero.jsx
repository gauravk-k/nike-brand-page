import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>
                YOUR FEET DESERVE THE BEST
            </h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES. YOUT FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className='hero-btn'>
                <a href="https://www.nike.com/in/w/metcon-shoes-3yxqszy7ok"><button>SHOP NOW</button></a>
                <a href="https://www.nike.com/in/w/metcon-shoes-3yxqszy7ok"><button className='sec-btn'>CATEGORY</button></a>
                
            </div>
            <div className='shopping'>
                <p>Also Available on</p>
                <div className='brand-icons'>
            
                    <a href="https://www.amazon.com/Shoes-NIKE-Men/s?rh=n%3A679255011%2Cp_89%3ANIKE"><img src="/images/amazon.png" alt="amazon-logo" /></a>
                    <a href="https://www.flipkart.com/mens-footwear/nike~brand/pr?sid=osp,cil"><img src="/images/flipkart.png" alt="flipkart-logo" /></a>
                
                </div>
            </div>
        </div>
        <div className='hero-img'>
            <img className='rotate' src="/images/shoe_image.png" alt="amazon-logo" />
        </div>
    </main>
  )
}

export default Hero;