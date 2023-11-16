import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import moment from 'moment';
import Swal from "sweetalert2";


const BookingInfo = ({ room }) => {
    const { img1, name, available_rooms } = room;

    const { user } = useContext(AuthContext);

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const reviewer = form.reviewer.value;
        const rating = form.rating.value;
        const today = form.today.value;
        const comment = form.comment.value;
        const room = form.room.value;

        const review ={
            reviewer, rating, today, comment, room
        }
        console.log(review)
        
        fetch('https://hotel-booking-server-navy.vercel.app/review', {
            method: 'POST',
            headers:  {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Review Done",
                });
            }
        })

    }

     

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

        fetch('https://hotel-booking-server-navy.vercel.app/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Booked",
                        text: "Booked the room successfully",
                    });
                }
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
                            <input  type="number" name="room" placeholder="Quantity of room" className="input input-bordered" />
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


                {/* review */}
            <div className="lg:w-2/3 h-fit lg:mx-auto bg-green-200 rounded-lg">
                {
                    user ? <div>
                        <h1 className="text-3xl font-bold text-center py-5 text-green-800">Review the Room</h1>
                        <form onSubmit={handleReview} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="reviewer" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Room Name</span>
                                </label>
                                <input type="text" defaultValue={name} name="room" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name="rating"  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="comment" name="comment"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Date</span>
                                </label>
                                <input type="text" name="today" defaultValue={moment().format("MMM Do YYYY")} className="input input-bordered" />
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