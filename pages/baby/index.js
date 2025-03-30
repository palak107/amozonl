"use client";
import React, { useState, useEffect } from 'react';
import styles from '../../styles/BabyProducts.module.css';
import Navbanner from '../components/nabar/navabrbelt/Nabarbanner/navbanner';
import Navbarbelt from '../components/nabar/navabrbelt/navbarbelt';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function BabyProductsDisplay() {
    const [products, setProducts] = useState([]); // ✅ Added this line

    useEffect(() => {
        fetchProductsFromSupabase();
    }, []);

    const fetchProductsFromSupabase = async () => {
        try {
            const { data, error } = await supabase.from('baby1').select('*');
            if (error) {
                console.error('Error fetching products:', error);
            } else {
                console.log("Fetched Products:", data); // ✅ Debugging log
                setProducts(data); // ✅ Now `setProducts` is defined
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <Navbarbelt />
            <Navbanner />
            <div className={styles.babyProductsContainer}>
                <h1>Baby Products</h1>
                <div className={styles.productList}>
                    {products.length === 0 ? (
                        <p>No products found</p>
                    ) : (
                        products.map((product) => (
                            <div key={product.id} className={styles.productItem}>
                                <img src={product.image_url} alt={product.name} className={styles.productImage} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                                <p>Category: {product.category}</p>
                                <p>Stock: {product.stock_quantity}</p>
                                <p>Brand: {product.brand}</p>
                                <p>Material: {product.material}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default BabyProductsDisplay;
