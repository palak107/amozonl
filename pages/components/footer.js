import React from 'react';
import styles from '../../styles/footer.module.css'; // Adjust path as needed

function Footer() {
  return (
    <footer className={styles.amazonfooter}>
      <div className={styles.backtotop}>
        <a href="#top">Back to top</a>
      </div>
      <div className={styles.footercontent}>
        <div className={styles.footersection}>
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Amazon and Our Planet</a></li>
            <li><a href="#">Modern Slavery Statement</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">Amazon Science</a></li>
          </ul>
        </div>
        <div className={styles.footersection}>
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#">Sell on Amazon</a></li>
            <li><a href="#">Supply to Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Protect & Build Your Brand</a></li>
            <li><a href="#">Sell on Amazon Handmade</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Independently Publish with Us</a></li>
            <li><a href="#">Host an Amazon Hub</a></li>
          </ul>
        </div>
        <div className={styles.footersection}>
          <h3>Amazon Payment Products</h3>
          <ul>
            <li><a href="#">Amazon.ca Rewards Mastercard</a></li>
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">Amazon Currency Converter</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Amazon Cash</a></li>
          </ul>
        </div>
        <div className={styles.footersection}>
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href="#">Shipping Rates & Policies</a></li>
            <li><a href="#">Amazon Prime</a></li>
            <li><a href="#">Returns Are Easy</a></li>
            <li><a href="#">Manage Your Content and Devices</a></li>
            <li><a href="#">Recalls and Product Safety Alerts</a></li>
            <li><a href="#">Registry & Gift List</a></li>
            <li><a href="#">Customer Service</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerlogo}>
        <img src="amazon-logo.png" alt="Amazon Logo" />
        <select>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
        <button>Cancel</button>
      </div>
      <div className={styles.footerlinks}>
        <a href="#">Amazon Music</a>
        <a href="#">Amazon Advertising</a>
        <a href="#">Amazon Business</a>
        <a href="#">Audible</a>
        <a href="#">Amazon Drive</a>
        <a href="#">Amazon Web Services (AWS)</a>
        <a href="#">Goodreads</a>
        <a href="#">IMDb</a>
        <a href="#">Amazon Photos</a>
        <a href="#">Shopbop</a>
        <a href="#">Amazon Resale</a>
        <a href="#">Whole Foods Market</a>
        <a href="#">Amazon Renewed</a>
        <a href="#">Smart Home</a>
        <a href="#">Woot!</a>
        <a href="#">Zappos</a>
        <a href="#">Ring</a>
        <a href="#">eero WiFi</a>
        <a href="#">Blink</a>
        <a href="#">Neighbors App</a>
        <a href="#">Amazon Pharmacy</a>
        <a href="#">PillPack</a>
      </div>
      <div className={styles.footerbottom}>
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Interest-Based Ads</a>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;