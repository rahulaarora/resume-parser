//dashboard page
import Dashboard from "../components/Dashboard";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth].js";
import { signOut } from "next-auth/react";

import Head from "next/head";
export default function Home(props) {
  let skills = ["mongodb", "nodejs"];
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className="p-5">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Dashboard role="mern" skills={skills} />
        <p>{props.name}</p>

        <button
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
      </main>
    </>
  );
}

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
    props: {
      name: session.user.name,
    },
  };
}
