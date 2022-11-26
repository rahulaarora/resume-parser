import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Navbar />
      <Component {...pageProps} isLoading={isLoading}  setIsLoading={setIsLoading}/>
    </>
  );
}

export default MyApp;
