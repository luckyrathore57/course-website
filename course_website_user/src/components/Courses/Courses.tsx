import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../../constant";
import { CourseType } from "../../types";
import { Course } from "./Course";


export function Courses() {
    const token:string = "Bearer " + window.localStorage.getItem("Token");
    const [courses,setCourses]=useState<CourseType[]>([]);


    useEffect(() => {
        try {
            axios.get(`${baseURL}/user/courses`, {
                headers: {
                    "authorization": token
                }
            }).then(
                (responseData) => {
                    setCourses(responseData.data.course);
                }
            )
        }
       catch(err){
        console.error({msg:"error"},err);
       }
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-5 px-8">
        {courses.map((course,i)=>(
            <div key={i} className="">
                <Course course={course}/>
            </div>
        ))}
        </div>
    )
}