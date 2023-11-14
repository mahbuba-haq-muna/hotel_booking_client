import { FaRegTrashAlt } from "react-icons/fa";
  import 'react-toastify/dist/ReactToastify.css';

const Bookings = ({booking, handleDelete}) => {
    
       
    
    const {_id, userName, img1, name, number, city, room, date} = booking;
    return (
       
            <tr>
                <th>{userName}</th>
                <td>{number}</td>
                <td>{name}</td>
                <td>{city}</td>
                <td>{date}</td>
                <td><button onClick={()=>{handleDelete(_id)}}><FaRegTrashAlt className="text-xl text-red-500"></FaRegTrashAlt></button></td>
                
            </tr>

            
        
    );
};

export default Bookings;