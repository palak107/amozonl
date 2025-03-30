import React from 'react';
import styles from '../../../../../styles/banner.module.css';
import Product from '../../../product';

const Banner = () => {
  return (
    <div className={styles.home}>   
      <div className={styles.home_container}>
        <img 
          className={styles.home_image}
          src="/71ErOdNn-nL._SX3000_.jpg" 
          alt="image is displaying" 
          width="40%" 
          height="40%" 
        />
      </div>
      <div className={styles.home_row}>
        <Product
          id='12321341'
          title='The Lean Startup' 
          price={29.99}
          description="Learn how to innovate and manage startups effectively with this insightful book."
          image="/lean.png"
          rating={3}
          prime={false}
        />

        <Product  
          id='49538094' 
          title='Kenwood kMix Stand Mixer' 
          price={50}
          description="A stylish and powerful kitchen mixer that simplifies your baking needs."
          image="/mixer.jpg"
          rating={5}
          prime={true}
        />  
      </div>

      <div className={styles.home_row}>
        <Product
          id='4903850'
          title='Samsung LCED Curved Gaming Monitor' 
          price={330}
          description="Immerse yourself in a top-notch gaming experience with this curved monitor."
          image="/monitor.jpg"
          rating={2}
          prime={false}
        /> 

        <Product
          id='23445930'
          title='Amazon Echo (3rd Generation) | Smart Speaker with AI' 
          price={98.99}
          description="Control your smart home with ease and enjoy quality audio with this device."
          image="/echo.jpg"
          rating={5}
          prime={false}
        />

        <Product 
          id='3254354345'
          title='New Apple iPad Pro - Silver' 
          price={500}
          description="Experience cutting-edge performance with the latest Apple iPad Pro."
          image="/ipad1.jpg"
          rating={4}
          prime={false}
        />
      </div>

      <div className={styles.home_row}>
        <Product
          id='90829332'
          title='Apple Watch (6th Generation)' 
          price={29.99}
          description="Track your health and fitness with this sleek and advanced smartwatch."
          image="/watch.webp"
          rating={3}
          prime={false}
        />
      </div>
    </div>
  );
};

export default Banner;
