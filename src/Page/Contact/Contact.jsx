

const Contact = () => {
    return (
        <div>
            <div className="hero h-screen relative bg-fixed" style={{
                backgroundImage: `url(https://i.ibb.co/rbCVgy8/9.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="hero-overlay bg-black bg-opacity-40 absolute inset-0"></div>

                <div className="hero-content text-center text-neutral-content relative z-10  ">

                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;