import "@/styles/globals.css";
import { SessionProvider as AuthProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../src/store"; // Ensure the correct path to your store.js
import Navbanner
 from "./components/nabar/navabrbelt/Nabarbanner/navbanner";
 import Navbarbelt from "./components/nabar/navabrbelt/navbarbelt";
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
    
        <Navbarbelt/>
        <Navbanner/>
        <Component {...pageProps} />
     
      </Provider>
    </AuthProvider>
  );
}

