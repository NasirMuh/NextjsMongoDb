import { useState } from 'react'
import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

const Forms = ({ test }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: '' })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        createTest();
    }
    const createTest = async () => {
        const res = await fetch("/api/userInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: formData.name })
        })
        const data = await res.json()
        router.push('/components/forms')
    }
    return (
        <>
            <form className="bg-white shadow rounded-lg p-8 max-w-xl mx-auto" onSubmit={handleSubmit}>
                <>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </>



            </form>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-2 mx-auto">
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {test.data?.map((data) => {
                                    const { id, name } = data;
                                    return <tr key={id}>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">{name}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export const getServerSideProps = async (context) => {
    try {
        const res = await axios.get("http://localhost:3000/api/userInfo");
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


export default Forms