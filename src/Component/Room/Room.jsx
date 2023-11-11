import { Link } from "react-router-dom";


const Room = ({room}) => {

    const { img1, name, _id, price_per_night } = room;

    return (
       <Link to={`/rooms/${_id}`}>
        <div className="">
            <img src={img1} alt="" className="h-60 rounded-md w-96 relative" />
        </div>
        <div className=" ">
            <h1 className="text-xl text-center text-white bg-green-800 p-3 font-semibold -mt-10 z-10 absolute">{name}</h1>
        </div>
        </Link>
    );
};

export default Room;