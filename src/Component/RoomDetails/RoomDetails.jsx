import { useLoaderData } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import BookingInfo from "../BookingInfo/BookingInfo";


const RoomDetails = () => {
    const room = useLoaderData();
    const { img1, img2, img3, description, name, price_per_night, room_size, available_rooms,special_offers } = room;
    return (



        <div className="p-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="carousel lg:w-1/2 ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} className="w-full lg:h-96" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full lg:h-96" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full lg:h-96" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className="card-body lg:w-1/2 ">
                    <h2 className="text-4xl text-green-800 font-bold border-b-btnColor border-b-2 pb-3">{name}</h2>
                    <p className="font-semibold my-7 ">{description}</p>
                    <button className="w-fit mx-auto btn-sm border-green-700 border-2 text-green-800 rounded-xl ">Available</button>
                </div>
            </div>

            {/* room overview */}

            <div className=" my-20">
                <h1 className="text-3xl lg:text-5xl text-green-800 text-center font-bold">Room Overview</h1>
                <p className="text-btnColor text-center font-semibold text-lg">Discover the epitome of comfort and luxury in our exquisite range of rooms and suites</p>
                <div className="grid lg:grid-cols-3 gap-5 my-7">
                    <div className="border-2 p-8">
                        <p className="flex text-lg"><FaCheck></FaCheck> <span className="font-bold mx-3 "> Available Rooms: </span>{available_rooms}</p>
                        <p className="flex text-lg"><FaCheck></FaCheck> <span className="font-bold mx-3 "> Room size:</span>{room_size}</p>
                        <p className="flex text-lg"><FaCheck></FaCheck> <span className="font-bold mx-3 "> Max Adult:</span> 4</p>
                        <p className="flex text-lg"><FaCheck></FaCheck> <span className="font-bold mx-3 "> Max children:</span> 2</p>
                        
                    </div>

                    <div className="border-2 p-8 text-center">
                        <p>Price for 1 night</p>
                        <h1 className="text-5xl font-bold text-red-600 my-5">{price_per_night}$</h1>
                       
                    </div>
                    <div className="border-2 p-8 text-center">
                        <h1 className="text-green-800 text-xl font-bold mb-2">Additional Facilities</h1>
                        <p>{special_offers[0]}</p>
                        <p>{special_offers[1]}</p>
                        
                    </div>
                </div>
            </div>
            {/* booking information */}
            <div>
                <BookingInfo
                room={room}
                ></BookingInfo>
            </div>
        </div>
    );
};

export default RoomDetails;