import React from 'react'
import styles from "../../../../../styles/navbarbannner.module.css"
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
const Navbanner = () => {
  const itemLists=[
     "All",
     "fresh",
     "sells", 
      "gifts",
      "Baby",
      "Buy again",
      "amaozon pay",
      "electronic",
      "orders",
  ]
  


  return (
    <div className={styles.navbar}>
    <div className={styles.navbarbannerleft}>
      {itemLists.map((item, index) => (
        <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} key={index} className={styles.myhover}>
          {item}
        </Link>
      ))}
    
    </div>
    <div>
    <h1 className={styles.sign}> sign out</h1>
    </div>
  </div>

   
    
  );
};



export default Navbanner
