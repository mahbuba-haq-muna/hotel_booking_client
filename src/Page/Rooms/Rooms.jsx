import { useLoaderData } from "react-router-dom";
import Room from "../../Component/Room/Room";
import PageTitle from "../../Component/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import Areview from "../../Component/Areview/Areview";


const Rooms = () => {
    // title
    <PageTitle title='Rooms'></PageTitle>
    const [asc, setAsc] = useState(true)
    const [rooms, setRooms] = useState([])
    const { img1, name, _id, price_per_night } = rooms;
    const [review, setReview] = useState([]);
    const{reviewer, rating, today, comment, id, room} = review;


    useEffect(() => {

        fetch(`https://hotel-booking-server-navy.vercel.app/rooms?sort=${asc? 'asc' :'des'}`)
            .then(res => res.json())
            .then(data => {
                setRooms(data)
            })
    }, [asc])

    useEffect(() => {

        fetch('https://hotel-booking-server-navy.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
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
            <div className="grid md:grid-cols-2 gap-12 mb-20">
            
            {
                rooms?.map(room => <Room
                key={room._id}
                room={room}
                ></Room>)
            }
            </div>

            <h2 className="text-4xl text-center font-bold text-green-800 my-7">Customer Reviews</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {
                    review?.map(aReview =><Areview
                    key={aReview._id}
                    aReview={aReview}
                    >

                    </Areview>)
                }
            </div>
            
        </div>
    ); 
};

export default Rooms;