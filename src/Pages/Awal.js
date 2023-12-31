import { useState } from "react";
import pic from '../img/gigit.png'
import { Link } from "react-router-dom";

export default function Awal() {

    const [isPageVisible, setPageVisibility] = useState(false);
    const [isPageBlack, setPageColor] = useState(true);

    const handleButtonClick = () => {
        setPageVisibility(!isPageVisible);
        setPageColor(!isPageBlack);
    };

    return (
        <>
            <div>
                <button onClick={handleButtonClick} className="text-white bg-gray-800 p-2 m-4 rounded">
                    Klik Disini
                </button>
                {isPageVisible && (
                    <div className='min-h-screen flex justify-center items-center transition duration-500 ease-in-out flex-col'>
                        {/* Your page content goes here */}
                        <Link to="/newyear">
                            <button className="text-white bg-gray-800 p-2 m-4 rounded">
                                Next Page
                            </button>
                        </Link>
                        <img src={pic} alt="Centered Img" />
                    </div>
                )}
            </div>
        </>
    )
}
