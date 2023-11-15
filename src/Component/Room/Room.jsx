import { Link } from "react-router-dom";


const Room = ({room}) => {

    const { img1, name, _id, price_per_night } = room;

    return (
       <div className="flex gap-5">
        <div className="w-1/2">
        <Link to={`/rooms/${_id}`}>
        <div className="">
            <img src={img1} alt="" className=" rounded-md w-full relative" />
        </div>
        <div >
            <h1 className="text-xl text-center text-white bg-green-800 p-3 font-semibold -mt-10 z-10 absolute">{name}</h1>
        </div>
        </Link>
        </div>
        
        <div className="w-1/2 border-2">

        </div>
       </div>
        
    );
};

export default Room;