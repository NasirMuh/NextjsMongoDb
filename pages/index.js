import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Test from "../models/testModel"
import connectMongo from '../utils/connectMongo';

export default function Home({ test }) {

  const [userData, setUserData] = useState(test)
  const createTest = async () => {
    const rondomNumber = Math.floor(Math.random() * 1000)
    const res = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `Test  ${rondomNumber}`,
        email: `Nasir ${rondomNumber}@test.com`
      })
    })
    const data = await res.json()
  }
  const DeleteData = async (_id) => {
    const res = await fetch(`/api/test/${_id}`, {
      method: "DELETE"
    })
    const data = await res.json()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Using Api</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js And Mongoose
        </h1>
        <div className={styles.grid}>
          {
            userData?.map((userData) => {
              return <div key={userData._id} className={styles.card} onClick={() => DeleteData(userData._id)}>
                <h2>Name : {userData.name} &rarr;</h2>
                <p>Email : {userData.email}</p>
              </div>
            })
          }
        </div>
        <button onClick={createTest}>Create </button>
      </main>
    </div>
  )
}
export const getServerSideProps = async () => {
  try {
    await connectMongo()
    const test = await Test.find()
    return {
      props: {
        test: JSON.parse(JSON.stringify(test))
      }
    }
  } catch (error) {
    console.log(error)
  }
}