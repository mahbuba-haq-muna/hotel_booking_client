import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import moment from 'moment';


const BookingInfo = ({ room }) => {
    const { img1, img2, img3, description, name, price_per_night, room_size, available_rooms, special_offers } = room;

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const userName = form.userName.value;
        const number = form.number.value;
        const city = form.city.value;
        const room = form.room.value;
        const date = form.date.value;

        const booking = {
            userName, img1,
            name, number, city, room, date
        };

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })  
    }

    return (
        <div className="grid lg:grid-cols-2 gap-5">


            {/* booking form */}
            <div className="bg-base-100 shadow-2xl">
                <h1 className="text-3xl font-bold text-center py-5 text-green-800">Booking Form</h1>
                <div className="card w-full  ">
                    <form onSubmit={handleBooking} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="userName" placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name="number" placeholder="phone number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input type="text" name="city" placeholder="your city" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room</span>
                            </label>
                            <input type="number" name="room" placeholder="Quantity of room" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Booking Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            {
                                user ?
                                    // <button className="btn bg-red-500">Book Now</button>


                                    <div>
                                        <button className="btn bg-red-500 text-white w-full" >Book</button>
                                    </div>
                                    :
                                    <Link to="/login">
                                        <button className="btn bg-red-500 text-white">Login to Book</button>
                                    </Link>
                            }
                        </div>
                    </form>
                </div>
            </div>



            <div className="lg:w-2/3 h-fit lg:mx-auto bg-green-200 rounded-lg">
                {
                    user ? <div>
                        <h1 className="text-3xl font-bold text-center py-5 text-green-800">Review the Room</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="comment"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Date</span>
                                </label>
                                <input type="text" defaultValue={moment().format("MMM Do YYYY")} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-btnColor text-white">Post Review</button>
                            </div>
                        </form>
                    </div>
                        :
                        <div>
                            <h1 className="text-3xl font-bold text-center py-5 text-green-800">Review the Room</h1>
                            <p className="text-xl text-center font-bold text-red-600 ">Book a room to post review</p>
                            <div className="w-full">
                                <img src="https://i.imgur.com/PXhoTy4.jpg" alt="" className="m-4 w-11/12" />
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default BookingInfo;