import React from 'react';
import Image from 'next/image'; // Import Image
import ratingStar from '../../public/star.png'; // Replace with the correct path
import styles from '../../styles/query.module.css'
const Rating = ({ products }) => {
  const rating = products?.rating || 0; // Get rating or default to 0

  return (
    <div className={styles.rating}>
      {Array(5) // Adjust the number of stars as needed
        .fill(1)
        .map((_, index) => (
          <Image
            key={index} // Add key prop
            src={index < rating ? ratingStar : '/star.png'} // Use ratingStar if filled, else empty star
            width={10}
            height={10}
            alt="rating star"
          />
        ))}
    </div>
  );
};

export default Rating;