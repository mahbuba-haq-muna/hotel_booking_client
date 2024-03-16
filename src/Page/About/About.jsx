
import icon1 from "../../assets/h5-img-02.png"
import icon2 from "../../assets/h5-img-03.png"
import icon3 from "../../assets/h5-img-04.png"
import icon4 from "../../assets/h5-img-05.png"
import icon5 from "../../assets/h5-img-06.png"
import icon6 from "../../assets/h5-img-07.png"
const About = () => {
  return (
    <div>
      <div className="hero h-screen relative bg-fixed" style={{
        backgroundImage: `url(https://i.ibb.co/bRck9XL/outdoor-terrace-sea-nature-beach-1203-5576.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="hero-overlay bg-black bg-opacity-40 absolute inset-0"></div>
        
        <div className="hero-content text-center text-neutral-content relative z-10  ">

          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          </div>

        </div>
        
      </div>
      <div className="py-20 px-10">
        <h1 className="text-3xl text-center mb-10 font-bold text-green-800"> Our story</h1>
        <p className="text-center">Welcome to Royal oasis, where every guest becomes part of our story. From the moment you step through our doors, you embark on a journey of luxury, comfort, and unforgettable experiences.

          It all began with a vision to create a haven where travelers could escape the ordinary and immerse themselves in the extraordinary. Nestled in the heart of , our hotel boasts a rich history and a commitment to excellence that sets us apart.

          As you wander through our elegant lobby, you'll be greeted by warm smiles and impeccable service. Our dedicated staff are passionate about crafting personalized experiences tailored to your every need, ensuring that your stay with us is nothing short of exceptional.

          Step into our thoughtfully designed rooms and suites, where modern amenities blend seamlessly with timeless elegance. Whether you're traveling for business or pleasure, each space is carefully curated to provide the ultimate in comfort and relaxation.

          Indulge your senses with culinary delights at our acclaimed restaurants, where world-class chefs create tantalizing dishes inspired by local flavors and international cuisine. Savor a gourmet meal paired with fine wines, or unwind with a signature cocktail crafted with care.

          But the true essence of Royal oasis lies in the experiences we offer. Whether you're seeking adventure or relaxation, our hotel is your gateway to a world of possibilities. Dive into our sparkling pool, rejuvenate your body and mind at our spa, or explore the vibrant culture and natural beauty of [Location] with our curated tours and activities.

          At Royal oasis, we believe that every moment should be cherished. That's why we go above and beyond to exceed your expectations, creating memories that will last a lifetime. From romantic getaways to family vacations and everything in between, let us be the backdrop to your next unforgettable adventure.

          Come, write your own chapter in our story. Your journey begins here, at Royal oasis.</p>
      </div>
      <div className="mb-20 px-20">
        <h2 className="text-center text-3xl my-20 font-semibold">Our Facilities</h2>
        <div className="grid lg:grid-cols-3 gap-20  w-fit mx-auto">
          <div className="w-56 ">
            <img src={icon1} alt="" className="w-fit mx-auto"/>
            <h2 className="text-2xl text-center">High Rating</h2>
          </div>
          <div className="w-56 ">
            <img src={icon2} alt="" className="w-fit mx-auto"/>
            <h2 className="text-2xl text-center">Quiet Hours</h2>
          </div>
          <div className="w-56 ">
            <img src={icon3} alt="" className="w-fit mx-auto"/>
            <h2 className="text-2xl text-center">Best Locations</h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-20 pt-20 w-fit mx-auto">
          <div className="w-56 ">
            <img src={icon4} alt="" className="w-fit mx-auto"/>
            <h2 className="text-2xl text-center">Free Cancellation</h2>
          </div>
          <div className="w-56 ">
            <img src={icon5} alt="" className="w-fit mx-auto"/>
            <h2 className="text-2xl text-center">Payment Options</h2>
          </div>
          <div className="w-56 ">
            <img src={icon6} alt="" className="w-fit mx-auto" />
            <h2 className="text-2xl text-center">Special Offers</h2>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default About;