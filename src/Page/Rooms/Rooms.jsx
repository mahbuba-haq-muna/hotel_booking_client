import { useLoaderData } from "react-router-dom";
import Room from "../../Component/Room/Room";
import PageTitle from "../../Component/PageTitle/PageTitle";
import { useState } from "react";


const Rooms = () => {
    // title
    <PageTitle title='Rooms'></PageTitle>
    const [asc, setAsc] = useState(true)
    const rooms = useLoaderData();
    const { img1, name, id, price_per_night } = rooms;
    return (
        <div className="px-10 pb-20">
            <h2 className="text-3xl lg:text-5xl text-green-800 font-bold text-center">Room Types</h2>
            <p className="text-xl text-btnColor font-semibold text-center py-7 ">Immerse Yourself in Pure Luxury at Royal Oasis</p>
            <div className="text-center mb-10">
            <button className="btn bg-btnColor" onClick={()=> setAsc(!asc)}>
                {
                    asc? "Price: High to Low" : "Price: Low to High"
                }
            </button>
            </div>
            <div className="grid gap-8">
            {
                rooms?.map(room => <Room
                key={room.id}
                room={room}
                ></Room>)
            }
            </div>
        </div>
    ); 
};

export default Rooms;