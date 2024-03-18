import { useNavigate } from "react-router-dom";
import { courseraLogo } from "../../constant";

export function AppBarN() {
    const navigate=useNavigate();
    return (
        <div className="px-1 flex justify-between bg-white h-10 parent-div">
            <div className="px-2 flex items-center bg-white child-div">
                <div className="hover:cursor-pointer"  onClick={()=>{navigate("/")}}>
                    <img className="w-[128px]" src={`${courseraLogo}`} alt="" />
                </div>
            </div>
            <div className=" px-1 bg-white items-center gap-1">
                <button className="bg-white hover:bg-white text-blue-800 font-semibold py-1 px-4 border-white rounded" onClick={()=>{navigate("/signin")}}>
                    sign in
                </button>
                <button type="button" className="px-5 py-1.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={()=>{navigate("/signup")}}>sign up</button>
            </div>
        </div>
    )
}