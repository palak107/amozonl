'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const useSupabase = (query = '') => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      setError(new Error('Supabase URL or Anon Key is missing.'));
      setLoading(false);
      return;
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const getDataFromSupabase = async () => {
      setLoading(true);
      try {
        let supabaseQuery = supabase.from('product').select('*');

        if (query) {
          supabaseQuery = supabaseQuery.or(
            `title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`
          );
        }

        const { data, error: supabaseError } = await supabaseQuery;

        if (supabaseError) {
          setError(supabaseError);
          console.error('Supabase error:', supabaseError);
        } else if (data) {
          setProducts(data);
          console.log('Supabase data:', data);
        }
      } catch (err) {
        setError(err);
        console.error('Error fetching from Supabase:', err);
      } finally {
        setLoading(false);
      }
    };

    getDataFromSupabase();
  }, [query]);

  const getSingleProduct = async (id) => {
    setLoading(true); // set loading to true when getting single product
    try {
      console.log('Fetching product with ID:', id);

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        setError(new Error('Supabase URL or Anon Key is missing.'));
        setLoading(false);
        return;
      }

      const supabase = createClient(supabaseUrl, supabaseAnonKey);

      const { data, error: supabaseError } = await supabase
        .from('product') // Ensure this matches your table name
        .select('*')
        .eq('id', id)
        .single();

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        setError(supabaseError);
        setLoading(false);
        return;
      }

      console.log('Supabase single product data:', data);
      setSingleProduct(data);
    } catch (err) {
      console.error('Error fetching single product:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, getSingleProduct, singleProduct }; // Return singleProduct
};

export default useSupabase;