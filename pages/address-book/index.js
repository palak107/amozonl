import React, { useState } from 'react';
import styles from '../../styles/addres.module.css';

const AddressBook = () => {
    const [country, setCountry] = useState('canada');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [aptSuiteUnit, setAptSuiteUnit] = useState('');
    const [city, setCity] = useState('');
    const [provinceTerritory, setProvinceTerritory] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [isDefaultAddress, setIsDefaultAddress] = useState(false);
    const [deliveryInstructions, setDeliveryInstructions] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // New state for message

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            country,
            fullName,
            phoneNumber,
            streetAddress,
            aptSuiteUnit,
            city,
            provinceTerritory,
            postalCode,
            isDefaultAddress,
            deliveryInstructions,
        });

        // Show success message
        setSuccessMessage("Form submitted successfully!");

        // Clear the form fields
        setFullName('');
        setPhoneNumber('');
        setStreetAddress('');
        setAptSuiteUnit('');
        setCity('');
        setProvinceTerritory('');
        setPostalCode('');
        setIsDefaultAddress(false);
        setDeliveryInstructions('');

        // Hide message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className={styles.addressBookContainer}>
            <h1>Add a New Address</h1>
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>} {/* Show success message */}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="country">Country/Region</label>
                    <select id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="canada">Canada</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name (First and Last name)</label>
                    <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <p>May be used to assist delivery</p>
                </div>
                <div>
                    <label htmlFor="streetAddress">Address - Street address or P.O. Box</label>
                    <input type="text" id="streetAddress" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="aptSuiteUnit">Address - Apt, Suite, Unit, Building</label>
                    <input type="text" id="aptSuiteUnit" value={aptSuiteUnit} onChange={(e) => setAptSuiteUnit(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="provinceTerritory">Province/Territory</label>
                    <select id="provinceTerritory" value={provinceTerritory} onChange={(e) => setProvinceTerritory(e.target.value)}>
                        <option value="">Select</option>
                        <option value="ON">Ontario</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="postalCode">Postal code</label>
                    <input type="text" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={isDefaultAddress} onChange={(e) => setIsDefaultAddress(e.target.checked)} />
                        Make this my default address
                    </label>
                </div>
                <div>
                    <label htmlFor="deliveryInstructions">Delivery instructions (optional)</label>
                    <textarea id="deliveryInstructions" value={deliveryInstructions} onChange={(e) => setDeliveryInstructions(e.target.value)} />
                    <p>Add preferences, notes, access codes and more</p>
                </div>
                <button type="submit" className={styles.submitButton}>Add address</button>
            </form>
        </div>
    );
};

export default AddressBook;
