import { useNavigate } from "react-router-dom";
import { landingPageImg } from "../constant";

export function Landing() {
    const navigate=useNavigate();
    return (
        <div className="lg:grid grid-cols-7 gap-x-4 px-5 pt-6 block h-screen border-t-gray-800">
            <div className="col-span-4 mt-24">
                <h1 className=" text-8xl font-semibold">Learn without limits</h1><br />
                <p className=" text-lg">Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies.</p><br /><br />
                <button type="button" className="px-8 py-3 text-lg font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={()=>{
                    navigate("/signup")
                }}>join for free</button>
            </div>

            <div className="col-span-3">
                <img src={landingPageImg} alt="" />
            </div>

        </div>
    )
}