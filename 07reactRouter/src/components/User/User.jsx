import React from 'react'
import {useParams} from 'react-router-dom'

function User(){
    const {userid} = useParams()
    return(
        
        <div className="bg-gray-700 font-bold text-3xl h-full">User: {userid} </div>
    )
}

export default User