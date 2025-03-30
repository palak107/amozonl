import React from 'react';
import styles from '../../styles/mystyles.module.css';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const AddToCartContainer = ({ id, title, image, price, description, rating, prime }) => {
  const dispatch = useDispatch();



  const addItemToBasket = () => {
    const product = { id, title, image, price, description, rating, prime };
    console.log('Adding to basket:', product); // Debugging log
    dispatch(addToBasket(product));
  };

  const product = { id, title, image, price, description, rating, prime };

console.log(product)
  return (
    <div>
      <div className={styles.date}>
        <h3>FREE delivery Thursday, March 20 on your first order</h3>
        <h3>Or fastest delivery Tomorrow, March 17. Order within 7 hrs 48 mins</h3>
        <p>Deliver to palak</p>
        <div className={styles.chekout_info}>
       
        
       <button  onClick={addItemToBasket}>add to basket</button>
    
    </div>
      </div>
    
    </div>
  );
};

export default AddToCartContainer;