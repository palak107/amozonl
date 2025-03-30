// "use client";
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Amozonlogo from "../../../../public/amozon.png";
// import styles from '../../../../styles/navbarbelt.module.css';
// import Image from 'next/image';
// import { signIn, signOut, useSession } from "next-auth/react";
// // Correct icons and imports
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import { MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
// import { useSelector } from 'react-redux';
// import { selectItems } from '../../../slices/basketSlice';


// const Navbarbelt = () => {
//     const [query, setQuery] = useState("");
//     const router = useRouter();
//     const { data: session, status } = useSession();
//     const items = useSelector(selectItems);
//     const [deliveryLocation, setDeliveryLocation] = useState("America");
//     const [isAddressModalOpen, setIsAddressModalOpen] = useState(false); // Modal state

//     const searchHandler = () => {
//         if (!query.trim()) return;
//         const encodedQuery = encodeURIComponent(query);
//         router.push(`/search/${encodedQuery}`);
//     };

//     const handleKeyDown = (event) => {
//         if (event.key === 'Enter') {
//             searchHandler();
//         }
//     };

//     const handleOpenAddressModal = () => {
//         setIsAddressModalOpen(true);
//     };

//     const handleCloseAddressModal = () => {
//         setIsAddressModalOpen(false);
//     };

//     const handleSaveAddress = (postalCode) => {
//         // Here, you would save the postal code to your backend or update the session
//         console.log("Saving postal code:", postalCode);
//         setDeliveryLocation(postalCode); // Update the displayed location (temporary)
//         handleCloseAddressModal();
//     };

//     return (
//         <div className={styles.Navbarbelt}>
//             {/* Left Section - Logo + Location */}
//             <div className={styles.leftSection}>
//                 {/* Amazon Logo */}
//                 <div className={styles.leftnavbeltlogo}>
//                     <Image
//                         onClick={() => router.push('/')}
//                         src={Amozonlogo}
//                         alt='Amazon Logo'
//                         width={100}
//                         height={40}
//                         priority
//                     />
//                 </div>

//                 {/* Deliver to Location */}
//                 <div className={styles.navbarbeltlocation} onClick={handleOpenAddressModal}> {/* Open modal on click */}
//                     <LocationOnOutlinedIcon className={styles.locationIcon} />
//                     <div>
//                         <span className={styles.deliverText}>Deliver to</span>
//                         <span className={styles.locationText}>delivery</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Search Bar */}
//             <div className={styles.searchContainer}>
//                 <input
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     type="text"
//                     className={styles.searchInput}
//                     placeholder="Search Amazon"
//                     onKeyDown={handleKeyDown}
//                 />
//                 <div onClick={searchHandler} className={styles.searchIcon}>
//                     <MagnifyingGlassIcon width={20} height={20} />
//                 </div>
//             </div>

//             {/* Right Section - Account, Orders, Cart */}
//             <div className={styles.rightnavbelt}>
//                 {/* Hello, Account & Lists */}
//                 <div onClick={!session ? signIn : signOut} className={styles.navOption}>
//                     <span className={styles.lineOne}>
//                         {session ? `Hello, ${session.user.name}` : "Hello, Sign in"}
//                     </span>
//                     <span className={styles.lineTwo}>Account & Lists</span>
//                 </div>

//                 {/* Returns & Orders */}
//                 <div className={styles.navOption}>
//                     <span className={styles.lineOne}>Returns</span>
//                     <span className={styles.lineTwo}>& Orders</span>
//                 </div>

//                 {/* Cart */}
//                 <div onClick={() => router.push("/checkout")} className={styles.cartOption}>
//                     <ShoppingCartIcon width={28} height={28} />
//                     <span className={styles.cartCount}>{items.length}</span>
//                     <span className={styles.cartText}>Cart</span>
//                 </div>
//             </div>

           
//         </div>
//     );
// };

// export default Navbarbelt;


"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Amozonlogo from "../../../../public/amozon.png";
import styles from '../../../../styles/navbarbelt.module.css';
import Image from 'next/image';
import { signIn, signOut, useSession } from "next-auth/react";
// Correct icons and imports
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from 'react-redux';
import { selectItems } from '../../../slices/basketSlice';
import Link from 'next/link'; // Import Link for navigation

const Navbarbelt = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const { data: session, status } = useSession();
    const items = useSelector(selectItems);
    const [deliveryLocation, setDeliveryLocation] = useState("America");
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false); // Modal state
    const [postalCodeInput, setPostalCodeInput] = useState(""); // State for postal code input

    const searchHandler = () => {
        if (!query.trim()) return;
        const encodedQuery = encodeURIComponent(query);
        router.push(`/search/${encodedQuery}`);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchHandler();
        }
    };

    const handleOpenAddressModal = () => {
        setIsAddressModalOpen(true);
    };

    const handleCloseAddressModal = () => {
        setIsAddressModalOpen(false);
    };

    const handleSaveAddress = () => {
        // Here, you would save the postal code to your backend or update the session
        console.log("Saving postal code:", postalCodeInput);
        setDeliveryLocation(postalCodeInput); // Update the displayed location (temporary)
        handleCloseAddressModal();
    };

    return (
        <div className={styles.Navbarbelt}>
            {/* Left Section - Logo + Location */}
            <div className={styles.leftSection}>
                {/* Amazon Logo */}
                <div className={styles.leftnavbeltlogo}>
                    <Image
                        onClick={() => router.push('/')}
                        src={Amozonlogo}
                        alt='Amazon Logo'
                        width={100}
                        height={40}
                        priority
                    />
                </div>

                {/* Deliver to Location */}
                <div className={styles.navbarbeltlocation} onClick={handleOpenAddressModal}> {/* Open modal on click */}
                    <LocationOnOutlinedIcon className={styles.locationIcon} />
                    <div>
                        <span className={styles.deliverText}>Deliver to</span>
                        <span className={styles.locationText}>{deliveryLocation}</span>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className={styles.searchContainer}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search Amazon"
                    onKeyDown={handleKeyDown}
                />
                <div onClick={searchHandler} className={styles.searchIcon}>
                    <MagnifyingGlassIcon width={20} height={20} />
                </div>
            </div>

            {/* Right Section - Account, Orders, Cart */}
            <div className={styles.rightnavbelt}>
                {/* Hello, Account & Lists */}
                <div onClick={!session ? signIn : signOut} className={styles.navOption}>
                    <span className={styles.lineOne}>
                        {session ? `Hello, ${session.user.name}` : "Hello, Sign in"}
                    </span>
                    <span className={styles.lineTwo}>Account & Lists</span>
                </div>

                {/* Returns & Orders */}
                <div className={styles.navOption}>
                    <span className={styles.lineOne}>Returns</span>
                    <span className={styles.lineTwo}>& Orders</span>
                </div>

                {/* Cart */}
                <div onClick={() => router.push("/checkout")} className={styles.cartOption}>
                    <ShoppingCartIcon width={28} height={28} />
                    <span className={styles.cartCount}>{items.length}</span>
                    <span className={styles.cartText}>Cart</span>
                </div>
            </div>

            {/* Address Modal */}
            {isAddressModalOpen && (
                <div className={styles.addressModal}>
                    <div className={styles.addressModalContent}>
                        <div className={styles.addressModalHeader}>
                            <h2>Choose your location</h2>
                            <button onClick={handleCloseAddressModal} className={styles.addressModalClose}>
                                X
                            </button>
                        </div>
                        <p>Delivery options and delivery speeds may vary for different locations</p>
                        <Link href="/address-book" className={styles.addressModalManage}> {/* Link to address book page */}
                            Manage address book
                        </Link>
                        <p>or enter a Canada postal code</p>
                        <input
                            type="text"
                            placeholder="Postal Code"
                            value={postalCodeInput}
                            onChange={(e) => setPostalCodeInput(e.target.value)}
                            className={styles.postalCodeInput}
                        />
                        <button onClick={handleSaveAddress} className={styles.applyButton}>Apply</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbarbelt;




