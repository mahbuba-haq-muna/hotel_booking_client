import { useEffect } from 'react';
import img1 from '../../assets/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2256.jpg'
import img2 from '../../assets/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150759.avif'
import img3 from '../../assets/room-8075477_1280.png'
import img4 from '../../assets/sunset-pool_1203-3192.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={img3} className="w-full " data-aos="zoom-in-up"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    {/* banner content */}
                <div className="absolute h-[600px] flex items-center left-0 top-0 gap-4 ">
                    <div className="space-y-7 md:pl-20 text-white">
                    <h2 className="text-6xl font-bold font-fontLibre drop-shadow-lg" data-aos="fade-up">Where Luxury Meets Tranquility</h2>
                    <p className='text-xl font-semibold drop-shadow-lg' data-aos="fade-down">Unwind in Style at Royal Ossis</p>
                    <button className="btn bg-btnColor" 
                    >Explore More</button>
                    </div>
                </div>
                </div>
               
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                     {/* banner content */}
                <div className="absolute h-[600px] flex items-center left-0 top-0 gap-4 ">
                    <div className="space-y-7 md:pl-20 text-white">
                    <h2 className="text-6xl font-bold font-fontLibre" data-aos="fade-up">Your Gateway to Elegance</h2>
                    <p className='text-xl font-semibold' data-aos="fade-down">Experience Luxury Beyond Compare</p>
                    <button className="btn bg-btnColor" 
                    >Explore More</button>
                    </div>
                </div>
                </div>
                
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                        {/* banner content */}
                <div className="absolute h-[600px] flex items-center left-0 top-0 gap-4 ">
                    <div className="space-y-7 md:pl-20 text-white">
                    <h2 className="text-6xl font-bold font-fontLibre drop-shadow-lg" data-aos="fade-up">Where Luxury Meets Tranquility</h2>
                    <p className='text-xl font-semibold drop-shadow-lg' data-aos="fade-down">Unwind in Style at Royal Ossis</p>
                    <button className="btn bg-btnColor" 
                    >Explore More</button>
                    </div>
                </div>
                </div>
                
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    {/* banner content */}
                <div className="absolute h-[600px] flex items-center left-0 top-0 gap-4 ">
                    <div className="space-y-7 md:pl-20 text-white">
                    <h2 className="text-6xl font-bold font-fontLibre" data-aos="fade-up">Your Gateway to Elegance</h2>
                    <p className='text-xl font-semibold' data-aos="fade-down">Experience Luxury Beyond Compare</p>
                    <button className="btn bg-btnColor" 
                    >Explore More</button>
                    </div>
                </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;