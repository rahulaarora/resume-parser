// dashboard page
import Dashboard from '../components/Dashboard'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth].js'
import clientPromise from '../util/mongodb'

import Head from 'next/head'
export default function Home (props) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className=''>
        <Dashboard
          name={props.name}
          email={props.email}
          role={props.role}
          skills={props.skills}
          scores={props.scores}
        />
      </main>
    </>
  )
}

export async function getServerSideProps (context) {
  const session = await getServerSession(context.req, context.res, authOptions)
  const client = await clientPromise
  const db = await client.db('resumeParser')
  const collection = await db.collection('resumes')

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: true
      }
    }
  }

  const data = await collection
    .find({ email: session.user.email }, { projection: { _id: 0 } })
    .toArray()
    .then((data) => data)
    .catch((err) => err)

  if (data.length === 0) {
    // console.log("user not found");
    return {
      redirect: {
        destination: '/upload',
        permanent: true
      }
    }
  }

  return {
    props: {
      name: session.user.name,
      email: session.user.email,
      role: data[0].role,
      skills: data[0].skills,
      scores: data[0].scores
    }
  }
}
