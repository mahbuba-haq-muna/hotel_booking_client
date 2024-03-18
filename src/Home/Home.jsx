import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Testimonial from "../Component/Testimonial/Testimonial";
import PageTitle from "../Component/PageTitle/PageTitle";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    const client = useLoaderData();
    const { name, location, rating, img, comment, id } = client;
    return (
        <div>
            
            <Banner></Banner>

             {/* discount */}

            <div className="px-10 my-28">
            <div className="grid lg:grid-cols-2 gap-5 bg-base-300 shadow-xl">
                <figure><img className=" rounded-tr-full" data-aos="fade-right" src="https://i.imgur.com/flKbCag.jpg" alt="Album"  /></figure>
                <div className="card-body" data-aos="fade-left">
                    <h2 className="card-title lg:text-3xl font-bold text-green-800">Winter Wonderland Savings! <span><img src="https://i.imgur.com/0FyrUyU.png" className="rounded-full w-28 h-28  " alt="" /></span></h2>
                    <p className="  font-semibold">Escape the chill and cozy up with our exclusive Winter Wonderland Discount. Embrace the magic of the season and enjoy a warm retreat at Royal Oasis. For a limited time, revel in the comfort of our luxurious rooms and suites at a special discounted rate</p>
                    <p className="font-bold text-green-600 text-xl">Special Offer Details:</p>
                    <ol className=" list-disc">
                        <li>Up to 30% off regular room rates</li>
                        <li>Complimentary winter-themed amenities</li>
                        <li>Flexible booking options</li>
                        <li>Valid for stays from November to January</li>
                        
                    </ol>
                    <div className="card-actions justify-end">
                        <Link to={'/rooms'}><button className="btn bg-red-600 text-white">Book Now</button></Link>
                    </div>
                </div>
            </div>
            </div>


            {/* testimony */}
            <div className="px-10 my-20 text-center">
                <p className="text-xl font-semibold text-btnColor">TESTIMONIAL</p>
                <h1 className="text-3xl lg:text-5xl font-bold text-green-800">What Our Clients Says</h1>
                <div className="mt-10 grid md:grid-cols-3 gap-10">
                    {
                        client?.map(aClient => <Testimonial
                            key={aClient.id}
                            aClient={aClient}
                        >

                        </Testimonial>)
                    }
                </div>
            </div>

           

            {/* newsletter */}

            <div className="px-10">
                <div className="hero " style={{ backgroundImage: 'url(https://i.imgur.com/xYl1iYO.jpg)' }}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-center  py-20">
                        <div >
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-green-800">Join Our Newslette </h1>
                            <p className="w-1/2 mx-auto text-lg"> Enjoy early access, exclusive offers, discount and a vibrant community. Thank you for being a part of our journey.</p>
                            <div>
                                <input type="email" name="email" placeholder="email" className="input input-bordered w-1/2" required />
                            </div>
                            <input type="submit" value="Subscribe" className="btn bg-btnColor mt-5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* map */}
            <div className="my-20" >
                <h1 className="text-3xl text-center font-bold my-10 text-green-800">Location</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14600.300250182128!2d90.408883!3d23.8159297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6feb6c1b7b1%3A0x76350c55ebc50c34!2sRadisson%20Blu%20Dhaka%20Water%20Garden!5e0!3m2!1sen!2sbd!4v1699592386157!5m2!1sen!2sbd" className="w-full h-80" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>


    );
};

export default Home;