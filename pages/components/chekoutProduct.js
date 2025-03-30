import React from 'react';
import styles from '../../styles/checkoutproduct.module.css';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import { useSelector } from 'react-redux';
const CheckoutProduct = ({
  id,
  title,
  image,
  price,
  description,
  rating,
  prime
}) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      image,
      price,
      description,
      rating,
      prime,
    };
    dispatch(addToBasket(product));
  };


  const removeItemFromBasket = () => {
    // Make sure we're just passing the id for removal
    console.log("Removing item with id:", id);
    dispatch(removeFromBasket({ id }));
    
  };
  const basket = useSelector((state) => state.basket.basket);
console.log(basket); // Check the basket state here


  return (
    <div className={styles.chekout}>
      <img src={image} width={200} height={200} alt="image is displaying" />
      <div className={styles.chekout_info}>
        <p>{title}</p>
        <div>
          {Array(rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <p>{description}</p>
        <p>${price}</p>
        {prime && (
          <div>
            <img src="/prime.png" alt="prime delivery" />
            <p>Prime Delivery</p>
          </div>
        )}
      </div>
      <div className={styles.chekout_info}>
        <button onClick={addItemToBasket} className={styles.button}>
          Add to basket
        </button>
        <button onClick={removeItemFromBasket} className={styles.button}>
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;