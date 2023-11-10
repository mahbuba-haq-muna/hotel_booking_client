import Navbar from "../Shared/Navbar/Navbar";
import error from "../assets/error-404-6052476_1280.png"

const ErrorPage = () => {
    return (
        <div className="h-screen">
            <Navbar></Navbar>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;