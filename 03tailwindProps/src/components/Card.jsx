import React from "react";
function Card({name,designation,imgSrc}){
    return(
        <>
         <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={imgSrc} alt="Image" />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-white">{name}</p>
            <p className="font-medium text-gray-500">{designation}</p>
         </div>
          <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
          <a href="#">
            Message
          </a>
          </button>
        </div>
      </div>
        </>
    )
}
export default Card