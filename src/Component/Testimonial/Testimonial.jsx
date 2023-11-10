import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Testimonial = ({ aClient }) => {

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    const { name, location, rating, img, comment, id } = aClient;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl" data-aos="zoom-out-down">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-full w-20 h-20" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title">{name}</h2>
                    <div className="rating py-7">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>{comment}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Testimonial;