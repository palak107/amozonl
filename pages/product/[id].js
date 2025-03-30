
// import React, { useEffect } from 'react';
// import SingleProduct from '../components/singleProduct';
// import { useRouter } from 'next/router';
// import useSupabase from '@/lib/superbase/hooks/useSupaBase';

// const id = () => {
//     const router = useRouter();

//     if (!router.isReady) {
//         return <div>Loading...</div>; // Or a loading indicator
//     }

//     const { id } = router.query;

//     const {singleProduct,getSingleProduct}=useSupabase();

// useEffect(()=>{
// getSingleProduct(id);
// },[])

// console.log( "single product"+singleProduct)
//     return (
//         <div>
//             single
//             <SingleProduct singleProduct={singleProduct} />
//             <h1>{id}</h1>
//         </div>
//     );
// };

// export default id;
import React, { useEffect } from 'react';
import SingleProduct from '../components/singleProduct';
import { useRouter } from 'next/router';
import useSupabase from '@/lib/superbase/hooks/useSupaBase';

import styles from '../../styles/mystyles.module.css'
const id = () => {
    const router = useRouter();

    if (!router.isReady) {
        return <div>Loading...</div>;
    }

    const { id } = router.query;

    const { singleProduct, getSingleProduct } = useSupabase();

    useEffect(() => {
        getSingleProduct(id);
    }, [getSingleProduct, id]); // Added dependencies to useEffect

    console.log("single product", singleProduct); //improved console log

    return (
        <div className={styles.display}>
           
            {singleProduct && <SingleProduct SingleProduct={singleProduct} />}
    
        </div>
    );
};

export default id;