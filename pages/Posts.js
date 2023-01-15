import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/router';

const Posts = ({ test }) => {
    const router = useRouter();
    const createTest = async () => {
        const rondomNumber = Math.floor(Math.random() * 1000)
        const res = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: `Nasir  ${rondomNumber}`,
            })
        })
        const data = await res.json()
        router.push('/Posts')
    }



    return (
        <>
            <h1>Possts Data List </h1>
            <button onClick={createTest}>Create</button>
            {
                test.data?.map((data, ind) => {
                    return <h1 key={ind}>{data.name}</h1>
                })
            }
        </>
    )
}


export const getServerSideProps = async (context) => {
    try {
        const res = await axios.get("http://localhost:3000/api/posts");
        const data = res.data;
        return {
            props: {
                test: JSON.parse(JSON.stringify(data))
            }
        }
    } catch (error) {
        console.log("Inside of props" + error)
    }
}


export default Posts