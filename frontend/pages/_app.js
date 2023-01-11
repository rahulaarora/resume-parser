import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  let userObj = {
    userName: "",
    email: "",
    mobileNumber: "",
    education: "",
    skills: "",
    companyName: "",
    collegeName: "",
    designation: "",
    experience: "",
    linkedIn: "",
    fileName: "form",
    role: "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(userObj);

  return (
    <>
     {isLoading && <Loader />}
     {/* {<Loader />} */}
      <Navbar />
      <Component
        {...pageProps}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        data = {data}
        setData = {setData}
      />
    </>
  );
}

export default MyApp;
