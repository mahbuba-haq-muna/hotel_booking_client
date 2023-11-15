import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Room = ({room}) => {

    const { img1, name, _id, price_per_night } = room;
   

    return (
       <div>
        <div>
        <Link to={`/rooms/${_id}`}>
        
            <img src={img1} alt="" className=" rounded-md h-72 w-full" />
        
       
            <div className="w-96">
                <h1 className="text-xl text-center text-white bg-green-800 p-3 font-semibold -mt-8 z-10 absolute">{name}</h1>
                <p className="bg-btnColor p-3 text-white font-bold rounded-md -mt-72  z-10 absolute ">Price: {price_per_night}$ / night</p>
                </div>
            
        
        </Link>
        </div>
        
       
       </div>
        
    );
};

export default Room;