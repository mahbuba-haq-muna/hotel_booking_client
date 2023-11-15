import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Room = ({room}) => {

    const { img1, name, _id, price_per_night } = room;
   

    return (
       <div>
        <div>
        <Link to={`/rooms/${_id}`}>
        
            <img src={img1} alt="" className=" rounded-md relative h-72 w-full " />
        
        <div >
            <h1 className="text-xl text-center text-white bg-green-800 p-3 font-semibold -mt-10 z-10 absolute">{name}</h1>
        </div>
        </Link>
        </div>
        
       
       </div>
        
    );
};

export default Room;