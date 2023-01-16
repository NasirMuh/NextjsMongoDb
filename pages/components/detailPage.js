import React from 'react'
import { useRouter } from 'next/router';
const DetailPage = ({ item }) => {
    const router = useRouter();

    const backFormPage = () => {
        router.push('/components/forms')
    }
    return (
        <>
            <h1>Detail page</h1>
            <p>{item.data.name}</p>
            <button onClick={() => backFormPage()}>Home Page</button>
        </>
    )
}
export async function getServerSideProps(context) {
    const { _id } = context.query;
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/userInfo/${_id}`)
    const item = await res.json()
    // Pass data to the page via props
    return { props: { item } }
}
export default DetailPage