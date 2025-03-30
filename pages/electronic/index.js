import React from 'react';
import style from '../../styles/electronic.module.css';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice'; // Import your addToBasket action

const Index = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToBasket = (product) => {
    const normalizedProduct = normalizeProduct(product);
    console.log('Adding to basket:', normalizedProduct);
    dispatch(addToBasket(normalizedProduct));
  };

  const normalizeProduct = (product) => {
    return {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
      rating: product.rating,
      prime: product.prime || false,
    };
  };

  return (
    <div className={style.main}>
      {product.map((product) => (
        <div className={style.product} key={product.id}>
          <h2>{product.title}</h2>
          <div>
            <img src={product.image} alt={product.title} className={style.productimage} />
          </div>

          <div>
            <p>{product.description}</p>
          </div>

          <p>Rating: {product.rating.rate} (Count: {product.rating.count})</p>

          <div>
            <button
              className={style.productbutton}
              onClick={(e) => {
                e.stopPropagation();
                addItemToBasket(product);
              }}
            >
              Add to basket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const product = await res.json();
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        product: [],
      },
    };
  }
}

export default Index;