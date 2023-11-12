import { useLoaderData } from "react-router-dom";
import Room from "../../Component/Room/Room";
import PageTitle from "../../Component/PageTitle/PageTitle";


const Rooms = () => {
    // title
    <PageTitle title='Rooms'></PageTitle>

    const rooms = useLoaderData();
    const { img1, name, id, price_per_night } = rooms;
    return (
        <div className="px-10 pb-20">
            <h2 className="text-3xl lg:text-5xl text-green-800 font-bold text-center">Room Types</h2>
            <p className="text-xl text-btnColor font-semibold text-center py-7 ">Immerse Yourself in Pure Luxury at Royal Oasis</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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