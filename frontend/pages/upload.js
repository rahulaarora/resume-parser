import Head from "next/head.js";
import Navbar from "../components/Navbar";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth].js";
const upload = () => {
  return (
    <>
      <Head>
        <title>Upload</title>
      </Head>
      <Navbar/>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}

export default upload;
