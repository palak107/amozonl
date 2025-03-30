"use client";
import React, { useState, useEffect } from 'react';
import styles from '../../styles/AddressBook.module.css';
import Navbanner from '../components/nabar/navabrbelt/Nabarbanner/navbanner';
import Navbarbelt from '../components/nabar/navabrbelt/navbarbelt';

function AddressBook() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        address: '',
        apt: '',
        city: '',
        province: '',
        postalCode: '',
        defaultAddress: false,
        deliveryInstructions: '',
    });
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {
            const response = await fetch('/api/addresses');
            if (!response.ok) {
                throw new Error('Failed to fetch addresses.');
            }
            const data = await response.json();
            setAddresses(data);
        } catch (error) {
            console.error('Error fetching addresses:', error);
            // Remove the res.status call here
        }
    };


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/save-address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Address saved successfully.');
                setFormData({
                    fullName: '',
                    phoneNumber: '',
                    address: '',
                    apt: '',
                    city: '',
                    province: '',
                    postalCode: '',
                    defaultAddress: false,
                    deliveryInstructions: '',
                });
                fetchAddresses();
            } else {
                console.error('Failed to save address:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving address:', error);
        }
    };

    return (
        <div>
            <div>
                <Navbarbelt />
                <Navbanner />
            </div>
            <div className={styles.addressBookContainer}>
                <h1>Add a new address</h1>
                <p>Or find an Amazon collection location near you</p>
                <div className={styles.formGroup}>
                    <label htmlFor="country">Country / Region</label>
                    <select name="country" id="country" className={styles.inputField}>
                        <option value="CA">Canada</option>
                    </select>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullName">Full name (First and Last name)</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={styles.inputField} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={styles.inputField} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">Address (Street address or PO Box)</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} className={styles.inputField} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="apt">Apt, Suite, Unit, Building</label>
                        <input type="text" name="apt" value={formData.apt} onChange={handleChange} className={styles.inputField} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} className={styles.inputField} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="province">Province / Territory</label>
                        <select name="province" value={formData.province} onChange={handleChange} className={styles.inputField}>
                            <option value="">Select</option>
                            <option value="ON">Ontario</option>
                            <option value="QC">Quebec</option>
                            <option value="BC">British Columbia</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="postalCode">Postal code</label>
                        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className={styles.inputField} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="defaultAddress" className={styles.checkboxLabel}>
                            <input type="checkbox" name="defaultAddress" checked={formData.defaultAddress} onChange={handleChange} />
                            Make this my default address
                        </label>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="deliveryInstructions">Delivery instructions (optional)</label>
                        <textarea name="deliveryInstructions" value={formData.deliveryInstructions} onChange={handleChange} className={styles.inputField} />
                    </div>
                    <button type="submit" className={styles.submitButton}>Add Address</button>
                </form>

                {/* Display Addresses */}
                <div>
                    <h2>Your Addresses</h2>
                    {addresses.map((address) => (
                        <div key={address.id}>
                            <p><strong>{address.fullName}</strong></p>
                            <p>{address.address}, {address.city}, {address.province}, {address.postalCode}</p>
                            <p>Phone: {address.phoneNumber}</p>
                            <p>Delivery Instructions: {address.deliveryInstructions}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddressBook;