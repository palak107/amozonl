// // // // 'use client'; // Important: Make this a client component

// // // // import { useRouter } from 'next/router';
// // // // import Navbanner from '../components/nabar/navabrbelt/Nabarbanner/navbanner';
// // // // import Navbarbelt from '../components/nabar/navabrbelt/navbarbelt';
// // // // import useSupabase from '@/lib/superbase/hooks/useSupaBase';
// // // // import { useEffect } from 'react';

// // // // const SearchResults = () => {
// // // //   const router = useRouter();
// // // //   const { encodedQuery } = router.query;
// // // //   const { products, loading, error } = useSupabase();

// // // //   useEffect(() => {
// // // //     if (error) {
// // // //       console.error('Supabase error:', error);
// // // //     }
// // // //   }, [error]);

// // // //   if (loading) {
// // // //     return <div>Loading...</div>;
// // // //   }

// // // //   if (!encodedQuery) {
// // // //     return <div>Loading...</div>;
// // // //   }

// // // //   const decodedQuery = decodeURIComponent(encodedQuery);

// // // //   return (
// // // //     <div>
// // // //       <Navbarbelt />
// // // //       <Navbanner />
// // // //       <h1>{decodedQuery}</h1>
// // // //       {products && products.map((product) => (
// // // //         <div key={product.id}>{product.name}</div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SearchResults;
// // // 'use client';

// // // import { useRouter } from 'next/router';
// // // import Navbanner from '../components/nabar/navabrbelt/Nabarbanner/navbanner';
// // // import Navbarbelt from '../components/nabar/navabrbelt/navbarbelt';
// // // import useSupabase from '@/lib/superbase/hooks/useSupaBase';
// // // import { useEffect } from 'react';
// // // import Image from 'next/image'
// // // import styles from '../../styles/query.module.css'
// // // const SearchResults = () => {
// // //   const router = useRouter();
// // //   const { encodedQuery } = router.query;
// // //   const decodedQuery = encodedQuery ? decodeURIComponent(encodedQuery) : ''; // Decode or empty string.

// // //   const { products, loading, error } = useSupabase(decodedQuery); // Pass decodedQuery

// // //   useEffect(() => {
// // //     if (error) {
// // //       console.error('Supabase error:', error);
// // //     }
// // //   }, [error]);

// // //   if (loading) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   if (error) {
// // //     return <div>Error: {error.message}</div>;
// // //   }

// // //   return (
// // //     <div>
// // //       <Navbarbelt />
// // //       <Navbanner />
// // //       <div className={styles.pro}>
// // //       <h1>{decodedQuery}</h1>
// // //       {products &&
// // //         products.map((product) => (
// // //           <div key={product.id}>

// // // {product.image && ( // Conditional rendering for image
// // //                 <Image
// // //                   src={product.image}
// // //                   alt={product.title}
// // //                   width={200} // Adjust as needed
// // //                   height={150} // Adjust as needed
// // //                   style={{objectFit: "contain"}}
// // //                 />
// // //               )}
// // //             <h3>{product.title}</h3>
// // //             <p>{product.description}</p>
// // //             <p>Category: {product.category}</p>
// // //             {/* Add other product details */}
// // //           </div>
// // //         ))}
// // //       </div>
     
// // //     </div>
// // //   );
// // // };

// // // export default SearchResults;


// // 'use client';

// // import { addToBasket } from '../slices/basketSlice';
// // import { useRouter } from 'next/router';
// // import Navbanner from '../components/nabar/navabrbelt/Nabarbanner/navbanner';
// // import Navbarbelt from '../components/nabar/navabrbelt/navbarbelt';
// // import useSupabase from '@/lib/superbase/hooks/useSupaBase';
// // import { useEffect } from 'react';
// // import Image from 'next/image';
// // import styles from '../../styles/query.module.css';
// // import Rating from '../components/ratng'
// // import { useDispatch } from 'react-redux';
// // const SearchResults = ( {id,title,image, description,price,
// //   rating,
// //   prime,}) => {
// //     const dispatch = useDispatch();
// //   const router = useRouter();
// //   const { encodedQuery } = router.query;
// //   const decodedQuery = encodedQuery ? decodeURIComponent(encodedQuery) : '';

// //   const { products, loading, error } = useSupabase(decodedQuery);

// //   useEffect(() => {
// //     if (error) {
// //       console.error('Supabase error:', error);
// //     }
// //   }, [error]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }

// //   const limitDescription = (description, limit) => {
// //     if (!description) return '';
// //     if (description.length <= limit) return description;
// //     return description.substring(0, limit) + '...';
// //   };


// //    const addItemToBasket = () => {
// //       const product = {
// //         id,
// //         title,
// //         image,
// //         price,
// //         description,
// //         rating,
// //         prime,
// //       };
// //       dispatch(addToBasket(product));
// //     };
// //   return (
    
// //     <div>
// //       <Navbarbelt />
// //       <Navbanner />
// //       <div className={styles.pro}>
// //         {/* <h1>{decodedQuery}</h1> */}
// //         {products &&
// //           products.map((product) => (
// //             <div key={product.id}>
// //               {product.image && (
// //                 <Image
// //                   src={product.image}
// //                   alt={product.title}
// //                   width={250} // Adjusted width
// //                   height={200} // Adjusted height
// //                   style={{ objectFit: 'contain' }}
// //                 />
// //               )}
// //               <h3>{product.title}</h3>
// //               <p>{limitDescription(product.description, 100)}</p>
// //               <p>Category: {product.category}</p>
// //               <div className={styles.pic}> 
// //              <Rating></Rating>
// //              </div>
// //               <span className={styles.price}>price:${product.price}</span>
// //               <button onClick={addItemToBasket}>Add to basket</button>
// //             </div>
// //           ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SearchResults;
// 'use client';

// import { addToBasket } from '../slices/basketSlice';
// import { useRouter } from 'next/router';
// import Navbanner from '../components/nabar/navabrbelt/Nabarbanner/navbanner';
// import Navbarbelt from '../components/nabar/navabrbelt/navbarbelt';
// import useSupabase from '@/lib/superbase/hooks/useSupaBase';
// import { useEffect } from 'react';
// import Image from 'next/image';
// import styles from '../../styles/query.module.css';
// import Rating from '../components/ratng';
// import { useDispatch } from 'react-redux';

// const SearchResults = () => {
//     const dispatch = useDispatch();
//     const router = useRouter();
//     const { encodedQuery } = router.query;
//     const decodedQuery = encodedQuery ? decodeURIComponent(encodedQuery) : '';

//     const { products, loading, error } = useSupabase(decodedQuery);

//     useEffect(() => {
//         if (error) {
//             console.error('Supabase error:', error);
//         }
//     }, [error]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     console.log("Supabase Products:", products); // Log fetched products

//     const limitDescription = (description, limit) => {
//         if (!description) return '';
//         if (description.length <= limit) return description;
//         return description.substring(0, limit) + '...';
//     };

//     const normalizeProduct = (product) => {
//         return {
//             id: product.id,
//             title: product.title,
//             image: product.image,
//             price: product.price,
//             description: product.description,
//             rating: product.rating,
//             prime: product.prime || false, // Assuming prime is optional
//         };
//     };

//     const addItemToBasket = (product) => {
//         const normalizedProduct = normalizeProduct(product);
//         console.log("Adding to basket:", normalizedProduct); // Log normalized product
//         dispatch(addToBasket(normalizedProduct));
//     };

//     return (
//         <div>
//             <Navbarbelt />
//             <Navbanner />
//             <div className={styles.pro}>
//                 {products &&
//                     products.map((product) => (
                        
//                         <div key={product.id}>
//                             {product.image && (
//                                 <Image
//                                     src={product.image}
//                                     alt={product.title}
//                                     width={250}
//                                     height={200}
//                                     style={{ objectFit: 'contain' }}
//                                 />
//                             )}
//                             <h3>{product.title}</h3>
//                             <p>{limitDescription(product.description, 100)}</p>
//                             <p>Category: {product.category}</p>
//                             <div className={styles.pic}>
//                                 <Rating />
//                             </div>
//                             <span className={styles.price}>price: ${product.price}</span>
//                             <button className={styles.checkoutProduct_buttons} onClick={() => addItemToBasket(product)}>Add to basket</button>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default SearchResults;
'use client';

import { addToBasket } from '../slices/basketSlice';
import { useRouter } from 'next/router';
import Navbanner from '../components/nabar/navabrbelt/Nabarbanner/navbanner';
import Navbarbelt from '../components/nabar/navabrbelt/navbarbelt';
import useSupabase from '@/lib/superbase/hooks/useSupaBase';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/query.module.css';
import Rating from '../components/ratng';
import { useDispatch } from 'react-redux';

const SearchResults = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { encodedQuery } = router.query;
    const decodedQuery = encodedQuery ? decodeURIComponent(encodedQuery) : '';

    const { products, loading, error } = useSupabase(decodedQuery);

    useEffect(() => {
        if (error) {
            console.error('Supabase error:', error);
        }
    }, [error]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log("Supabase Products:", products);

    const limitDescription = (description, limit) => {
        if (!description) return '';
        if (description.length <= limit) return description;
        return description.substring(0, limit) + '...';
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

    const addItemToBasket = (product) => {
        const normalizedProduct = normalizeProduct(product);
        console.log("Adding to basket:", normalizedProduct);
        dispatch(addToBasket(normalizedProduct));
    };

    return (
        <div>
           
            <div className={styles.pro}>
                {products &&
                    products.map((product) => (
                        <div
                            key={product.id}
                            className={styles.productBox}
                            onClick={() => router.push(`/product/${product.id}`)}
                        >
                            {product.image && (
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={250}
                                    height={200}
                                    style={{ objectFit: 'contain' }}
                                />
                            )}
                            <h3>{product.title}</h3>
                            <p>{limitDescription(product.description, 100)}</p>
                            <p>Category: {product.category}</p>
                            <div className={styles.pic}>
                                <Rating />
                            </div>
                            <span className={styles.price}>price: ${product.price}</span>
                            <button
                                className={styles.checkoutProduct_buttons}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addItemToBasket(product);
                                }}
                            >
                                Add to basket
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SearchResults;