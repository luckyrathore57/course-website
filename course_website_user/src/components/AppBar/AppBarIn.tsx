import { useNavigate } from "react-router-dom";
import { courseraLogo } from "../../constant";

export function AppBarIn() {
    const navigate=useNavigate();
    return (
        <div className="px-1 flex justify-between bg-white h-10 parent-div sticky">
            <div className="px-2 flex items-center bg-white child-div">
                <div className="hover:cursor-pointer" onClick={()=>{navigate("/")}}>
                    <img className="w-[128px]" src={`${courseraLogo}`} alt="" />
                </div>
            </div>
            <div className=" px-1 bg-white items-center flex gap-1">
                <button 
                className="bg-white hover:bg-white text-gray-900 font-semibold py-1 px-2 border-white rounded" 
                onClick={()=>{navigate("/createcourse")}}
                >
                    create course
                </button>


                <button 
                className="bg-white hover:bg-white text-gray-900 font-semibold py-1 px-2 border-white rounded" onClick={()=>{navigate("/courses")}}>
                    courses
                </button>


                <button
                type="button" 
                className="px-5 py-1.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800  rounded-lg text-center" 
                onClick={()=>{
                    window.localStorage.setItem("Token","")
                    window.location.href="/"
                }}>sign out</button>
            </div>
        </div>
    )
}