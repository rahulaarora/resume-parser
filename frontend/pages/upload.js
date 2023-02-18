import Head from "next/head.js";
import Navbar from "../components/Navbar";
import UploadResume from "../components/UploadResume";
import ResumeForm from "../components/ResumeForm";
import clientPromise from "../util/mongodb";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth].js";

const upload = ({ isLoading, setIsLoading, data, setData }) => {
  
  return (
    <>
      <Head>
        <title>Upload</title>
      </Head>
      <Navbar />
      <UploadResume
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        data={data}
        setData={setData}
      />
      <ResumeForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        data={data}
        setData={setData}
      />
    </>
  );
};

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

export default upload;
