import Head from "next/head";
import { useState } from "react";
import Router, { useRouter } from 'next/router'
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import clientPromise from "../util/mongodb";
import { useSession } from "next-auth/react";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth].js";


function resumeForm(props) {
    const { data: session, status } = useSession();

    
    let tempObj = {
        userName: "",
        // email: "",
        mobileNumber: "",
        degree: "",
        skills: "",
        companyName: "",
        collegeName: "",
        designation: "",
        experience: "",
        linkedIn: "",
        fileName: "form",
        role: "",
    };

    const [user, setUser] = useState(props.data);
    const router = useRouter();
    function changeHandler(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    function toObject(arr) {
        var rv = {};
        for (var i = 0; i < arr.length; ++i)
            rv[arr[i]] = 0;
        return rv;
    }

    async function submitHandler(e) {
        e.preventDefault();
        props.setIsLoading(true);
        let skills = user.skills.split(",").map((skill) => skill.trim());
        let bodyObj = {
            ...user,
            "email": session?.user?.email, // this is the email of the user who is logged in
            "scores": toObject(skills),
        }

        const response = await fetch("/api/formUpload", {
            method: "POST",
            body: JSON.stringify(bodyObj),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const res = await response.json();
        props.setIsLoading(false);
        res.success == true ? alert(res.message) : alert(res.error);
        //to clear the form
        props.setData(tempObj);
        router.push("/");
    }

    return (
        <>
            <Head>
                <title>Resume Form</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <main className="container-fluid py-5 pt-2">
                <form className="col-md-5 mx-auto" onSubmit={submitHandler} method={"POST"} encType="multipart/form-data">
                    <h6>Enter Details:</h6>

                    <div className="d-flex flex-column form-container">

                        <label htmlFor="role">Enter the job role you are aspiring for* :</label>
                        <select required name="role" id="role" className="my-2" value={user.role === null ? " " : user.role} onChange={changeHandler}>
                            <option disabled default value="">Select from the options--</option>
                            <option value="mern developer">MERN Stack Developer</option>
                            <option value="java developer">JAVA Developer</option>
                        </select>

                        <label htmlFor="userName">Full Name* :</label>
                        <input required type="text" name="userName"
                            id="userName" placeholder="Enter Your Full name" className="my-2" onChange={changeHandler} />

                        {/* <label htmlFor="email">Email* :</label>
                        <input required type="email" name="email"
                            id="email" placeholder="Enter Your Valid Email" className="my-2" value={user.email === null ? " " : user.email} onChange={changeHandler} /> */}


                        <label htmlFor="mobileNumber">Mobile Number:</label>
                        <input type="tel" name="mobileNumber"
                            id="mobileNumber" placeholder="Enter Your Mobile Number" className="my-2" value={user.mobileNumber === null ? " " : user.mobileNumber} onChange={changeHandler} />


                        <label htmlFor="degree">Degree:</label>
                        <input type="text" name="degree"
                            id="degree" placeholder="Enter your Highest degree" className="my-2" value={user.degree === null ? " " : user.degree} onChange={changeHandler} />


                        <label htmlFor="skills">Skills* :</label>
                        <input required type="text" name="skills"
                            id="skills" placeholder="Enter your skills separated with comma" className="my-2" value={user.skills === null ? " " : user.skills} onChange={changeHandler} />


                        <label htmlFor="companyName">Company Name:</label>
                        <input type="text" name="companyName"
                            id="companyName" placeholder="Enter your current Company Name" className="my-2" value={user.companyName === null ? " " : user.companyName} onChange={changeHandler} />


                        <label htmlFor="collegeName">College Name:</label>
                        <input type="text" name="collegeName"
                            id="collegeName" placeholder="Enter your College Name" className="my-2" value={user.collegeName === null ? " " : user.collegeName} onChange={changeHandler} />


                        <label htmlFor="designation">Designation:</label>
                        <input type="text" name="designation"
                            id="designation" placeholder="Enter your Designation" className="my-2" value={user.designation === null ? " " : user.designation} onChange={changeHandler} />


                        <label htmlFor="experience">Experience:</label>
                        <input type="text" name="experience"
                            id="experience" placeholder="Enter your Experience" className="my-2" value={user.experience === null ? " " : user.experience} onChange={changeHandler} />


                        <label htmlFor="linkedIn">LinkedIn URL:</label>
                        <input type="url" name="linkedIn"
                            id="linkedIn" placeholder="Enter the Valid URL" className="my-2" value={user.linkedIn === null ? " " : user.linkedIn} onChange={changeHandler} />


                    </div>

                    <button type="submit" className="d-block my-4 btn btn-outline-success">
                        Submit
                    </button>
                </form>
            </main>
        </>
    );
}

export default resumeForm;

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);
    const client = await clientPromise;
    const db = await client.db("resumeParser");
    const collection = await db.collection("resumes");
  
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: true,
        },
      };
    }
  
    let data = await collection
      .find({ email: session.user.email })
      .toArray()
      .then((data) => data)
      .catch((err) => err);
  
    if (data.length !== 0) {
      // console.log("user not found");
      return {
        redirect: {
          destination: "/",
          permanent: true,
        },
      };
    }
  
    return {
      props: {},
    };
  }