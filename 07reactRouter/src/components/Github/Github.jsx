import React from 'react'
import{useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Deepak-75324')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data); 
    //         setData(data)
    //     })
    // }, [])
    return(
        <div class="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers: {data.followers} 
        <img src={data.avatar_url} alt="Git Profile Pic" width={300}  />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Deepak-75324')
    return response.json()
}