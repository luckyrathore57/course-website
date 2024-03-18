import { useNavigate } from "react-router-dom";
import { CourseType } from "../../types";
import { baseURL } from "../../constant";
import axios, { AxiosResponse } from "axios";

export function Course({course}:{course:CourseType}) {
    const navigate=useNavigate();
    const courseId=course._id;
    const handlePurchase = async () => {
        try {
          const token = localStorage.getItem('token'); // Assuming you have the JWT token stored in localStorage
          const response: AxiosResponse<string> = await axios.post(
            `${baseURL}/user/courses/${courseId}`,
            null,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if(response){
            alert("course purchased")
          }
          navigate("/courses")
          
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            console.log(error);
            
        }

      };
    }
    if(!course){
        return(
            <></>
        )
    }
    return (
        <div>
            <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-1/5 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={course.imageLink}
                        className=" h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {course.title}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {`₹${course.price}`}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {course.description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={handlePurchase}
                    >
                        purchase course
                    </button>
                </div>
            </div>

        </div>
    )
}