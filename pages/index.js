import styles from "@/styles/Home.module.css";
import Navbarbelt from "./components/nabar/navabrbelt/navbarbelt"
import Navabanner from "./components/nabar/navabrbelt/Nabarbanner/navbanner.js"
import Banner from "./components/nabar/navabrbelt/Nabarbanner/banner"
import Footer from "./components/footer"
export default function Home() {
  return (
    <div className={styles.container}>
     <div> <Banner /></div>
     
<div>
  <Footer/>
</div>
    </div>
   
  );
}

