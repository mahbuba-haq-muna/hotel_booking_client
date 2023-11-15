

const Areview = ({aReview}) => {
    const{reviewer, rating, today, comment, room} = aReview;
    return (
        <div className=" bg-orange-50 p-10 text-center">
            
            
            <h2 className="text-xl  font-bold">{reviewer}</h2>
            <h2 className="text-xl text-green-800 font-serif font-bold mb-3"> Room: {room}</h2>
            <p className="text-red-500"> Rating: {rating}</p>
            <p className="my-3 font-semibold text-btnColor">Date: {today}</p>
            <p>{comment}</p>
        </div>
    );
};

export default Areview;