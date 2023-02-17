import Login from "../components/Login";
import Head from "next/head";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth].js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
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
